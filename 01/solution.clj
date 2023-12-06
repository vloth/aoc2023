(ns solution
  (:require [clojure.string :as str]))

(defn is-digit? [c] (Character/isDigit c))

(defn ->calibration [xs]
  (Integer/parseInt
   (str (first xs) (last xs))))

(->> "input.txt"
     (slurp)
     (str/split-lines)
     (map (fn [line]
            (->> line
                 (filter is-digit?)
                 ->calibration)))
     (apply +))
