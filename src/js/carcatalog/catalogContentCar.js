'use strict'

import { catalogFilter } from "./catalogFilter";
import { lazyimg } from "./lazyimg";
import { videoEvent } from "./videoEvent";
import { clearContent } from "../globalscripts/clearcontent";

export function catalogContentCar (obj, cars, querySelector) {
  if (window.innerWidth<700) {
    clearContent(document.querySelector(".stockContainer"))
    document.querySelector(".stockContainer").style.display="none"
}

    if (document.querySelectorAll(".navigation-catalog-button")[0].dataset.brand !== "all") {
        document.querySelectorAll(".navigation-catalog-button")[0].textContent = obj[cars][0].brandtitle;
    }
    if (document.querySelectorAll(".navigation-catalog-button")[0].dataset.brand === "all")
      navigationcatalogButton[0].textContent = "Все";
    catalogFilter(document.querySelectorAll(".navigation-catalog-button"));
    obj[cars].forEach((e, i) => {
      const x = e.name;
      lazyimg(e)
      let y = x.split(" ").join("");
      document.querySelector(`.${querySelector}`).insertAdjacentHTML(
        "beforeend",
        `
  
          <div class = " ${y} subsection--content content--${cars}" style="animation-name: delayingActive;
          animation-duration: 2s;">
  
          <div class="headerKunteynirCarArr" style="display:grid;grid-template-columns:auto auto;">
  <img src="../data/brand logos/${e.brandtitle.toLowerCase()}.png" style="width:32px;margin-left:0;">
  
  <a href=${e.pano ? e.pano : e.pdf} class ="pano__button">${
          e.pano ? "3D" : ""
        }</a>
  </div>
         
  
  
          
          <img class="subsection--img catalog__item-a lazy-img" src=${
            e.lazyimg
          } data-src=${e.img} />
     
  
              <div class="subsection--title catalog__item-b"> 
              <div class ="video__button ${e.name.replace(/\s/g, '')}" style="visibility:${e.video ? "visible" : "hidden"}"> ${e.video ? "видео" : ""} </div>
              <div class ="video__button__back ${e.name.replace(/\s/g, '')}"> назад  </div>
             <a href="https://wa.me/+79818005080?text=Здравствуйте,интересует%20цена%20на%20автомобиль%20${e.name}." class ="price__button">${!e.priceRU ? "узнать цену" : "от"+" "+e.priceRU+" "+"USD"}</a>
  
              </div>
              <h3>${e.name}</h3>
  
             
  
        <a href=${
                 e.pdf ? e.pdf : `https://wa.me/+79818005080?text=Здравствуйте,интересует%20цена%20на%20автомобиль%20${e.name}.`
               } class = 'carinfo__button catalog__item-e'> 
                  
                     ${!e.pdf ? "узнать подробнее" : "комплектации и опции"} 
                  
              </a>
  
      
          
          </div> 
          `
      );
      videoEvent(e,y);
      
    });
  };