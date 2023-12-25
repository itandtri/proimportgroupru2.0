'use strict'

import { carName } from "./stockSliderVars"
import { arrNames } from "./stockSliderVars"


export function stockSliderTranslateX(){

document.querySelectorAll(`.stockSlider`).forEach((s,i)=>{s.style.transform=`translateX(${100*i}%)`})
  
document.querySelectorAll(`img.stockSlider__photos__img.${carName}`).forEach((s,i)=>{s.style.transform=`translateX(${100*i}%)`})

arrNames.forEach((e)=>{

document.querySelectorAll(`.${e}`).forEach((s,i)=>{s.style.transform=`translateX(${100*i}%)`})

})


}