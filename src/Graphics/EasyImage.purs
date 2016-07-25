module Graphics.EasyImage where

import Prelude (Unit)
import Control.Monad.Aff (Aff)

foreign import data EASY_IMAGE :: !

type Bounds =
  { x :: Int
  , y :: Int
  , width :: Int
  , height :: Int
  }

foreign import cropInPlace
  :: forall eff
   . Bounds
  -> String
  -> Aff (easyImage :: EASY_IMAGE | eff) Unit
