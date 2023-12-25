'use strict'

import { videoEventBack } from "./videoEventBack";

export function videoEvent (object,carName) {
  
    document.querySelectorAll(".video__button").forEach((e) => {
     
      e.addEventListener("click", (el) => {
  
        if (object.name.replace(/\s/g, '') == el.target.classList[1]){
        el.target.parentNode.parentNode.childNodes.forEach((elem) => {
          if (
            elem.outerHTML ===
            `<img class="subsection--img catalog__item-a" src="${object.img}" data-src="${object.img}">`
          ) {
            elem.outerHTML =  ` <iframe class="video subsection--img catalog__item-a" src=${object.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
          }
        });
        e.style.display = "none";
        [...el.target.parentNode.childNodes].forEach((e)=>{
          if(e.className===`video__button__back ${object.name.replace(/\s/g, '')}`){
            e.style.display = "block";
            videoEventBack(object,carName);
          }
        })


     } });
    });
  };

  
