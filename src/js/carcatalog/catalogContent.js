'use strict'

import { backBtnHTML } from "./backbtnHTML";
import { catalogContentCar } from "./catalogContentCar";
import { lazyLoad } from "../globalscripts/lazyload";
import { brandsObject } from "./variables";

export function catalogContent (cars, obj) {
    
  
      document.querySelector(".subsection.carsCatalog").style.marginTop = "0";
      document.querySelector(".navigation-catalog").style.display = "flex";
  
      if (obj[cars].length === 0) {
        document.querySelectorAll(".navigation-catalog-button")[0].textContent = brandsObject[cars][0].brandtitle;
        document.querySelectorAll(".navigation-catalog-button")[0].dataset.brand === cars;
  
        document.querySelector(".subsection.carsCatalog").insertAdjacentHTML(
          "beforeend",
          `
      <div class="subsection--noCars">
              
                  <img src="logo small.36503edb.svg" style="width:40px;margin-left: auto;margin-right: auto; margin-bottom: 10px;">
                 <div style="font-style:italic"> Автомобили с данным типом двигателя в разделе не представлены </div>
     <img src="полоски.677b7c40.svg" style="width:230px; max-height:16px; margin-left:auto;margin-right:auto;margin-top: 25px;">
  
  </div> `
        );

      } else {
        if (Array.isArray(cars))
          cars.forEach((cars, i) => {
            if (i > 0)
            document.querySelector(".subsection.carsCatalog").insertAdjacentHTML(
                "beforeend",
                `
      <div class = "subsection--content header--brand" >
  
  
      <img src="/полоски.677b7c40.svg" style="height:20px;max-width:300px;margin-left: auto;margin-right: auto;">
  
              </div> `
              );
  
            catalogContentCar(obj, cars, `carsCatalog`);
          });
  
        if (!Array.isArray(cars)) catalogContentCar(obj, cars, "carsCatalog");
      }
    
    backBtnHTML();
    let imgTargets = document.querySelectorAll("img[data-src]");
    imgTargets.forEach(lazyLoad)
  
  };

