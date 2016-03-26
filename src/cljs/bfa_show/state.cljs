(ns bfa-show.state
  (:require [schema.core :as s :include-macros true]
            [bfa-show.v2 :as v2]
            [bfa-show.window :as window]
            [bfa-show.graphics :as g]))

;; ---------------------
;; Helpers

;; ---------------------
;; Schema

(def schema {:dimensions v2/schema
             :video-playing? s/Bool
             :current-page s/Keyword
             :header-graphics g/schema})

;; ---------------------
;; app-db

(defn initial-state []
   {:header-graphics (g/initial-state)
    :video-playing? false
    :current-page :home
    :dimensions (window/size)})

