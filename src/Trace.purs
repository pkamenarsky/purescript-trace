module Trace (trace, traceColored, orange, blue, green, red) where

-- | Prints the arguments of `f`, when fully evaluated, to the console.
-- | For example:
-- |
-- |     let f = traceColored orange "f" \x y -> x + y
-- |         g = f 5
-- |         r = g 6
-- |
-- | will print `f :: 5 -> 6 -> 11` (in orange). The arguments will be in
-- | an expandable group, allowing further inspection.
foreign import traceColored :: forall f. String -> String -> f -> f

orange :: String
orange = "#fe6905"

blue :: String
blue = "#1e90ff"

green :: String
green = "#8dc63f"

red :: String
red = "#ae0202"

-- | Uncolored version of `traceColored`.
trace :: forall f. String -> f -> f
trace = traceColored "default"
