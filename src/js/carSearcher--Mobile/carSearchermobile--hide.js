'use strict'

export function carSearchermobile_hide () {

   document.querySelector('.carsearcher-mobile').animate(
    [
        { transform: "translateY(0)" },
        { transform: `translateY(-${window.innerHeight}px)` },
    ],
    {
        // timing options
        duration: 500,
        iterations: 1,
      },
)

 setTimeout(()=>{document.querySelector('.carsearcher-mobile').style.visibility='hidden'} ,500)   
     window.onscroll=function(){};
}