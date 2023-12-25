'use strict'

import { stockArr } from "../carcatalog/variables"
import stockJSON from "../model/data/json/stock.json";


import { convertStockJSON } from "../globalscripts/convertStockJSON.js";
import { stockSliderCreate } from "../newcars_slider/stockSliderCreate"
import {stockSliderContent} from "../newcars_slider/stockSliderContent"
import {stockSliderContainer} from "../newcars_slider/stockSliderContainer"
import {carSliderButtons} from "../newcars_slider/carSliderButtons"
import {stockSliderTranslateX} from "../newcars_slider/stockSliderTranslateX"
import { carSliderListeners } from "../newcars_slider/carSliderListeners"
import { lazyStockSlider } from "../newcars_slider/lazyStockSlider"
import {addPrice} from "../globalscripts/addPrice.js"


convertStockJSON(stockJSON, stockArr)
addPrice(stockArr)


if (window.innerWidth >700)stockSliderCreate(document.querySelector('.banner'))
if (window.innerWidth <700)stockSliderCreate(document.querySelector('.navActive'))


stockSliderContainer()
stockSliderContent(stockArr)
stockSliderTranslateX()
carSliderButtons()
carSliderListeners()
lazyStockSlider()

