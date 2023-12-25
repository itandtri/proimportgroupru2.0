'use strict'




import {simpleSliderButtons} from "./simpleSliderButtons"
import {simpleSliderTranslateX} from "./simpleSliderTranslateX"
import { simpleSliderListeners } from "./simpleSliderListener"


simpleSliderTranslateX('.ss-kombinat')
simpleSliderListeners('.sc-kombinat','.ss-kombinat')

simpleSliderTranslateX('.ss-review')
simpleSliderButtons('.sc-review')
simpleSliderListeners('.sc-review','.ss-review')