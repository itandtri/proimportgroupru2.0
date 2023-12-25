'use strict'

import { videoEvent } from "./videoEvent";


export function videoEventBack (object,carName) {
    document.querySelectorAll(".video__button__back").forEach((e,i) => {

      e.addEventListener("click", (el) => {
  
        if (object.name.replace(/\s/g, '') == el.target.classList[1]){

        el.target.parentNode.parentNode.childNodes.forEach((elem) => {

          if (
            elem.outerHTML ===  `<iframe class="video subsection--img catalog__item-a" src="${object.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>`

          ) {
            elem.outerHTML =
            `<img class="subsection--img catalog__item-a" src="${object.img}" data-src="${object.img}">`
          }

        });
        e.style.display = "none";
        [...el.target.parentNode.childNodes].forEach((e)=>{
          if(e.className===`video__button ${object.name.replace(/\s/g, '')}`){
            e.style.display = "block";
            videoEvent(object,carName);
          }
        })


     } });

      

    })
  
  };

