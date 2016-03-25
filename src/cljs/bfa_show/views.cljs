(ns bfa-show.views
  (:require [bfa-show.graphics :as g]
            [re-frame.core :refer [dispatch]])
  (:require-macros [bfa-show.macros :refer [read-markdown]]))

(defn handle-message [message]
  (println "message" (.-origin message))
  (println "message" (.-data message)))

(defn add-listeners []
  (.addEventListener js/window "message" #(handle-message %) false))

(.addEventListener js/window "message" #(add-listeners))

(defn render []
  (let [statement (read-markdown "copy/statement.md")]
    [:div.container
     [:canvas#graphics]
     [:section {:dangerouslySetInnerHTML {:__html statement}}]]))

