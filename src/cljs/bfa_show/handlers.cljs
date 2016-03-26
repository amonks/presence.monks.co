(ns bfa-show.handlers
  (:require [bfa-show.state :refer [initial-state schema]]
            [re-frame.core :refer [register-handler path after trim-v dispatch]]
            [bfa-show.window :as window]
            [bfa-show.v2 :as v2]
            [schema.core :as s]))

;; --------------------
;; Middleware

(defn check-and-throw!
  "throw an exception if db doesn't match the schema"
  [a-schema db]
  (if-let [problems (s/check a-schema db)]
    (println "problems... " problems)
    #_(throw js/Error. (str "schema check failed: " problems))))

;; after an event handler is run, this middleware can check that
;; the value in app-db still correctly matches the schema.
(def check-schema-mw (after (partial check-and-throw! schema)))

;; ---------------------
;; Helpers

(defn constrain
  ([fun i minimum maximum]
    (let [result (fun i)]
      (if (> result maximum)
        minimum
        (if (< result minimum)
          maximum
          result))))
  ([fun i]
   (constrain fun i 0 1)))

(defn constrained+ [amount]
  #(constrain (partial + amount) %))

(def get-another
  (fn [f c !]
    (loop []
      (let [attempt (f c)]
        (if (not= ! attempt)
          attempt
          (recur))))))

(def get-another-randomly (partial get-another rand-nth))

;; ---------------------
;; Event Handlers

(register-handler :initialize-db
                  check-schema-mw
                  (fn
                    [_ _]
                    (println "initializing db")
                    (initial-state)))

(register-handler :set-page
                  [check-schema-mw (path :current-page) trim-v]
                  (fn [_ [new-page]]
                    new-page))

(register-handler :resize-window
                  (fn [db [_ size]]
                    (let [size (or size (window/size))]
                      (set! (.-width (.getElementById js/document "graphics")) (v2/x size))
                      (set! (.-height (.getElementById js/document "graphics")) (v2/y size))
                      (assoc db :dimensions size))))

(register-handler :frame
                  [check-schema-mw (path :header-graphics :darts) trim-v]
                  (fn [darts _]
                    (let [inc-dart (constrained+ 0.005)]
                      (map #(update-in % [:progress] inc-dart) darts))))

(register-handler :add-node
                  [check-schema-mw (path :header-graphics :nodes) trim-v]
                  (fn [nodes _]
                      (conj nodes {:position [(rand)
                                              (rand)]
                                   :size (rand 50)})))

(register-handler :add-node-at-position
                  [check-schema-mw (path :header-graphics :nodes) trim-v]
                  (fn [nodes [position]]
                    (let [window-size (window/size)
                          scaled-position (v2/div position window-size)
                          new-node {:position [(v2/x scaled-position)
                                               (v2/y scaled-position)]
                                    :size 10}]
                      (dispatch [:add-dart-from-node new-node])
                      (conj nodes new-node))))

(register-handler :add-dart-from-node
                  [check-schema-mw (path :header-graphics) trim-v]
                  (fn [state [node]]
                    (let [darts (:darts state)
                          nodes (:nodes state)]
                      (assoc-in state [:darts] (conj darts {:from node
                                                            :to (get-another-randomly nodes node)
                                                            :progress 0})))))

(register-handler :add-dart
                  [check-schema-mw (path :header-graphics) trim-v]
                  (fn [state _]
                    (let [nodes (:nodes state)]
                      (assoc-in state [:darts] (conj (:darts state) {:from (rand-nth nodes)
                                                                     :to (rand-nth nodes)
                                                                     :progress 0})))))
(register-handler :stop-video
                  [check-schema-mw (path :video-playing?) trim-v]
                  (fn [_ _]
                    false))

(register-handler :play-video
                  [check-schema-mw (path :video-playing?) trim-v]
                  (fn [_ _]
                    true))

