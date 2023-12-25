'use strict'

export function lazyStockSlider(){
    document.querySelectorAll(`img.stockSlider__photos__img`).forEach(e=>{
      e.addEventListener('load',(el)=>el.target.classList.remove('lazystockslider') )
    })
  }