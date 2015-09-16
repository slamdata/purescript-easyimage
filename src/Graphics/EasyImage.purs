module Graphics.EasyImage where

import Prelude (Unit())
import Control.Monad.Aff (Aff())

foreign import data EASY_IMAGE :: !

foreign import cropInPlace :: forall e.
                              Int -> Int -> Int -> Int ->
                              String -> Aff (easyImage :: EASY_IMAGE|e) Unit
