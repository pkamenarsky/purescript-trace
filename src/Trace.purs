module Trace (trace) where

foreign import trace :: forall a. String -> a -> a
