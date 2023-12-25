'use strict'

import { carsMenu } from "./carsMenu";
import { lazyLoad } from "../globalscripts/lazyload";
import { lazyimg } from "./lazyimg";
import { clearContent } from "../globalscripts/clearcontent";

export function mainCatalogMenu (arr, obj) {
    document.querySelector(".navigation-catalog").style.display = "none";
    clearContent( document.querySelector(".carsCatalog"));
    document.querySelectorAll(".navigation-catalog-button").textContent = "Все";
  

  
    arr.forEach((e, i) => {
     lazyimg(Object.values(obj[e])[0])
      document.querySelector(".carsCatalog").insertAdjacentHTML(
        "beforeend",
        `<div class = "subsection--content mainMenu" data-catalog=${e} style="animation-name: delayingActive;
          animation-duration: 2s;">
          <img src="../data/brand logos/${obj[e][0].brandtitle.toLowerCase()}.png" : ""
          " style="height:32px;margin-left:0;">
          <img class="subsection--img catalog__item-a lazy-img" src=${
            Object.values(obj[e])[0].lazyimg
              ? Object.values(obj[e])[0].lazyimg
              : ""
          } data-src=${
          Object.values(obj[e])[0].img ? Object.values(obj[e])[0].img : ""
        } />
          <h3> ${
            Object.values(obj[e])[0].brandtitle
              ? Object.values(obj[e])[0].brandtitle
              : ""
          }</h3>
          <button class = 'carinfo__button catalog__item-e'> 
                                          
                                              ${
                                                obj[e][0].brandtitle !==
                                                "ЗАПЧАСТИ"
                                                  ? "модели комплектации цены"
                                                  : "подробнее"
                                              }
                                          
                                      </button>
          </div>`
      );
    });
  
    carsMenu();
  
    let imgTargets = document.querySelectorAll("img[data-src]");
   imgTargets.forEach(lazyLoad)
  
  };

