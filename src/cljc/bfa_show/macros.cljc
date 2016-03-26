(ns bfa-show.macros
  (:use markdown.core))

(defn read-markdown [file]
  (let [markdown-string (slurp (str "copy/" file ".md"))]
    (md-to-html-string markdown-string)))

(defmacro copy [file]
  (let [html (read-markdown file)]
    [:div {:dangerouslySetInnerHTML {:__html html}}]))

