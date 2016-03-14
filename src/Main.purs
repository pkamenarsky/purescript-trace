module Main where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)

import Trace as Trace

f :: Int -> Int -> Int
f = Trace.trace "f" \a b -> a + b

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = do
  let g = f 8
  log $ show $ g 4
