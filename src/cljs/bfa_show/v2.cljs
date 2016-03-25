(ns bfa-show.v2
  (:require [schema.core :as s]))

;; --------------------
;; Schema

(def schema
  [s/Num])

(defn create [x y]
  [x y])

(defn x [v2]
  (first v2))

(defn y [v2]
  (last v2))

(defn v-reduce [fun & vecs]
  [(fun (map x vecs))
   (fun (map y vecs))])

(defn apply-operator-with-vector-or-scalar [fun a b]
  (if (= (type b) cljs.core/PersistentVector)
    [(fun (x a) (x b))
     (fun (y a) (y b))]
    [(fun (x a) b)
     (fun (y a) b)]))

(def subt (partial apply-operator-with-vector-or-scalar -))
(def mult (partial apply-operator-with-vector-or-scalar *))
(def div (partial apply-operator-with-vector-or-scalar /))
(def add (partial apply-operator-with-vector-or-scalar +))

(defn mag [v]
  (.sqrt js/Math (+ (* (x v) (x v))
                 (* (y v) (y v)))))

(defn normalize [v]
  (div v (mag v)))

