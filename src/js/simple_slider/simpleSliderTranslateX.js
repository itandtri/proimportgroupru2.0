'use strict'

export function simpleSliderTranslateX(slider){

    document.querySelectorAll(slider).forEach((s,i)=>{s.style.transform=`translateX(${100*i}%)`})

}