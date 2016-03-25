(ns bfa-show.graphics
  (:require [quil.core :as q :include-macros true]
            [bfa-show.window :as window]
            [schema.core :as s]
            [bfa-show.v2 :as v2]
            [re-frame.core :refer [subscribe dispatch]]))

;; --------------------
;; Helpers

(.addEventListener js/window "resize" #(dispatch [:resize-window]))
(.addEventListener js/window "click" #(do (dispatch [:add-node-at-position [(.-clientX %) (.-clientY %)]])))

;; --------------------
;; Schema

(def node-schema
  {:position v2/schema
   :size s/Num})

(def dart-schema
  {:progress s/Num
   :from node-schema
   :to node-schema})

(def schema
  {:nodes [node-schema]
   :darts [dart-schema]})

;; --------------------
;; Data


(def ipad-nodes
  [{:position [(/ 1 4) (/ 2 3)]
    :size 70}
   {:position [(/ 2 4) (/ 1 3)]
    :size 70}
   {:position [(/ 3 4) (/ 2 3)]
    :size 70}])

(defn initial-state []
  (let [node #(get ipad-nodes %)]
    {:nodes ipad-nodes
     :darts [{:from (node 0)
              :to (node 1)
              :progress 0}
             {:from (node 1)
              :to (node 2)
              :progress 0}
             {:from (node 2)
              :to (node 0)
              :progress 0}]}))

;; --------------------

(defn setup []
  (q/frame-rate 30))

(defn correct-position [x y width height]
  (let [left (- x (/ width 2))
        top (- y (/ height 2))]
    [left top]))

(defn draw-dart-line
  [dart]
  (let [to (window/scale (get-in dart [:to :position]))
        from (window/scale (get-in dart [:from :position]))]
    (q/line (v2/x to) (v2/y to) (v2/x from) (v2/y from))))

(defn draw-dart
  ([x y width height]
   (let [position (correct-position x y width height)]
     (q/fill 0)
     (q/rect (v2/x position)
             (v2/y position)
             width height)))
  ([dart]
   (let [to (get-in dart [:to :position])
         from (get-in dart [:from :position])
         position (v2/add from
                          (v2/mult (v2/subt to from)
                                   (:progress dart)))
         scaled-position (window/scale position)]
     (draw-dart-line dart)
     (draw-dart (v2/x scaled-position) (v2/y scaled-position) 9 9))))

(defn draw-node
  ([x y width height]
   (let [position (correct-position x y width height)]
     (q/fill 255)
     (q/rect (v2/x position) (v2/y position) width height)))
  ([node]
   (let [dimensions @(subscribe [:dimensions])
         position (v2/mult (:position node) dimensions)]
     (draw-node (v2/x position) (v2/y position) (:size node) (:size node)))))

(defn draw []
  (let [video-playing? @(subscribe [:video-playing?])]
    (if-not video-playing?
      (dispatch [:frame]))
    (let [nodes (subscribe [:nodes])
          darts (subscribe [:darts])]
      (apply q/rect (into [0 0] (window/size)))
      (doall (map draw-dart @darts))
      (doall (map draw-node @nodes)))))

(defn init []
  (let [dimensions @(subscribe [:dimensions])]
    (q/defsketch header
      :host "graphics"
      :size [(v2/x dimensions) (v2/y dimensions)]
      :setup setup
      :draw draw)))

