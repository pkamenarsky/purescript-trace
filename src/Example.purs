module Main where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)

import Data.Maybe

import Trace as Trace

f :: Int -> Int -> Maybe Int -> Int
f = Trace.trace "f" \a b c -> a + b

v :: Int
v = Trace.trace "v" 9

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = do
  let g = f 8
  log $ show $ g 3 Nothing
  log $ show v
