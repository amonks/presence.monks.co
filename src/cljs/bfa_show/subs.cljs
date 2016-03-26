(ns bfa-show.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))

;; --------------
;; Helpers

;; --------------
;; Subscription Handlers and Registration

(register-sub :current-page
              (fn [db _]
                (reaction (:current-page @db))))

(register-sub :nodes
              (fn [db _]
                (reaction (get-in @db [:header-graphics :nodes]))))

(register-sub :darts
              (fn [db _]
                (reaction (get-in @db [:header-graphics :darts]))))

(register-sub :video-playing?
              (fn [db _]
                (reaction (:video-playing? @db))))

(register-sub :dimensions
              (fn [db _]
                (reaction (:dimensions @db))))

