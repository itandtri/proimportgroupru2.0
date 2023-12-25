'use strict'



export function carSliderButtons(){
    document.querySelector('.stockContainer').insertAdjacentHTML('beforeend',
    `
    <div class ='stockSlider__button__container'>
    <button class='stockSLider__button stockBtnLeft'> ← </button>
    <button class='stockSLider__button stockBtnRight'> → </button>
    </div>`)
}