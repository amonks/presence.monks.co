(ns bfa-show.macros
  (:use markdown.core))

(defmacro read-markdown [file]
  (let [markdown-string (slurp file)]
    (md-to-html-string markdown-string)))

