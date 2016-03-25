(ns bfa-show.window
  (:require [re-frame.core :refer [dispatch]]
            [bfa-show.v2 :as v2]))

(defn size
  [] [(.-innerWidth js/window) (.-innerHeight js/window)])

(defn dispatch-resize
  [e] (dispatch [:resize-window (size)]))
(.addEventListener js/window "resize" dispatch-resize)

(defn scale [position]
  (v2/mult (size) position))

