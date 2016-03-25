(set-env!
 :source-paths   #{"sass" "src/cljs" "src/cljc" "copy"}
 :resource-paths #{"resources"}
 :target-path    "target"

 :dependencies '[[adzerk/boot-cljs "1.7.170-3" :scope "test"]
                 [adzerk/boot-cljs-repl "0.2.0" :scope "test"]
                 [adzerk/boot-reload "0.4.1" :scope "test"]
                 [pandeiro/boot-http "0.6.3" :scope "test"]
                 [org.clojure/clojurescript "1.7.228"]
                 [markdown-clj "0.9.86"]
                 [com.cemerick/url "0.1.1"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [quil "2.3.0"]
                 [reagent "0.6.0-alpha" :exclusions [org.clojure/tools.reader]]
                 [prismatic/schema "1.0.4"]
                 [re-frame "0.7.0-alpha-2"]
                 [hiccup "1.0.5"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.1.6" :exclusions [org.clojure/tools.reader]]
                 [mathias/boot-sassc "0.1.1" :scope "test"]
                ])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[pandeiro.boot-http    :refer [serve]]
  '[mathias.boot-sassc    :refer [sass]])

(deftask build []
  (comp (cljs)
        (sass :output-dir "css")
        (target)))

(deftask run []
  (comp (serve)
        (watch)
        (cljs-repl)
        (reload)
        (build)
        (target)))

(deftask production []
  (task-options! cljs {:optimizations :advanced}
                 sass {:output-style "compressed"})
  identity)

(deftask development []
  (task-options! cljs   {:optimizations :none :source-map true}
                 reload {:on-jsload 'bfa-show.core/init}
                 sass   {:line-numbers true
                         :source-maps  true})
  identity)

