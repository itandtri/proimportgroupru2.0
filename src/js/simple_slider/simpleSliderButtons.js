'use strict'



export function simpleSliderButtons(container){
   if (document.querySelector(container)) {document.querySelector(container).insertAdjacentHTML('beforeend',
    `
    <div class ='stockSlider__button__container'>
    <button class='stockSLider__button stockBtnLeft'> ← </button>
    <button class='stockSLider__button stockBtnRight'> → </button>
    </div>`)}
}