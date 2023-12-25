'use strict'

import { carSearchermobile_main } from "../carSearcher--Mobile/carSearchermobile_main";
import { brandsNames,brandsObject } from "../carcatalog/variables";
import { carSearchermobile_click } from "./carSearchermobile--click";

if (window.innerWidth<700){
carSearchermobile_main(brandsNames,brandsObject , ".carsearcher-content");
carSearchermobile_click()

document.querySelector('.animate-charcter').addEventListener('click',(e)=>{
    window.scrollTo({top: 0, behavior: 'smooth'})

document.querySelector('.carsearcher-mobile').style.visibility='visible'
document.querySelector('.carsearcher-mobile').animate(
    [
        { transform: `translateY(-${window.innerHeight}px)` },
        { transform: "translateY(0px)" },
    ],
    {
        // timing options
        duration: 500,
        iterations: 1,
      },
)
window.onscroll = function () { window.scrollTo(0, 0); };
})

/*document.querySelector('.banner-back').addEventListener('click',(e)=>{
    document.querySelector('.carsearcher-mobile').style.visibility='hidden'
    window.onscroll=function(){};
    })
*/


}
else{
    document.querySelector('.animate-charcter').addEventListener('click',(e)=>{
        window.scrollTo({top: 500, behavior: 'smooth'})})

}
//  animation: dropmenu .8s linear forwards
/*
@keyframes dropmenu {
    0% {transform: translateY(200px) scaleY(0.9); opacity: 0;}
    5% {opacity: .5;}
    60%{transform: translateY(0px) scaleY(1); opacity: .8;}
    100% {transform: translateY(0px) scaleY(1); opacity: 1;}
  }*/