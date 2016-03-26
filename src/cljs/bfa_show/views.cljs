(ns bfa-show.views
  (:require [bfa-show.graphics :as g]
            [re-frame.core :refer [dispatch subscribe]])
  (:require-macros [bfa-show.macros :refer [copy]]))

(defn handle-message [message]
  (println "message" (.-origin message))
  (println "message" (.-data message)))

(defn add-listeners []
  (.addEventListener js/window "message" #(handle-message %) false))

(.addEventListener js/window "message" #(add-listeners))

(defn footer []
  [:footer [:p "2016 | " [:a {:href "http://monks.co"} "Andrew Monks"]]
           [:p [:a {:href "/colophon"} "colophon"]]])

(defn header []
  [:header [:h1 [:a {:href "/"} "PRESENCE and the arrow of time"]]])

(defn video []
  [:div.vimeo [:iframe {:src "https://player.vimeo.com/video/160085792?color=ffffff&title=0&byline=0&portrait=0"}]])

(defn home []
  [:main
   [:div.col [video]]
   [:div.col (copy "statement")]])

(defn colophon []
  [:main
   [:div.col (copy "colophon-app")]
   [:div.col (copy "colophon-website")]])

(defn render []
  (let [current-page (subscribe [:current-page])]
    [:div.container
     [header]
     (case @current-page
       :home [home]
       :colophon [colophon])
     [footer]
     [:canvas#graphics]]))

