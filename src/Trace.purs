module Trace (trace, traceColored, orange, blue, green, red) where

foreign import traceColored :: forall a. String -> String -> a -> a

orange :: String
orange = "#fe6905"

blue :: String
blue = "#1e90ff"

green :: String
green = "#8dc63f"

red :: String
red = "#ae0202"

trace :: forall a. String -> a -> a
trace = traceColored "default"
