'use strict'

import { carSearchermobile_backHTML } from "./carSearchermobile--backHTML";
import { carSearchermobile_backHTML_hide } from "./carSearchermobile--backHTML--hide";
import { clearContent } from "../globalscripts/clearcontent";
import { carSearchermobile_bannerSubSearcher } from "./carSearchermobile--bannerSubSearcher";
import { carSearchermobile_bannerBackButton } from "./carSearchermobile--bannerBackButton";

import * as vars from "../carcatalog/variables"

export function carSearchermobile_click () {
    document.querySelectorAll(".banner-search").forEach((e, i) => {
      e.addEventListener("click", (e) => {


    
        let cars;
        if (!e.target.classList.contains("banner-back")) {

          cars = e.target.classList[e.target.classList.length-1]
        /*  !e.target.childNodes[1]
            ? (cars = e.target.textContent)
            : (cars = e.target.childNodes[1].innerText);*/
            
        }
        if (!cars) carSearchermobile_bannerBackButton();

       cars ? cars = cars.split(" ").join("") : ""

        if (cars) { 

          document.querySelector('.carsearcher-content').animate(
            [
                { transform: `translateX(0)` },
                { transform: `translateX(-${window.innerHeight}px)` },
            ],
            {
                // timing options
                duration: 800,
                iterations: 1,
              },
        )
         setTimeout (()=>{
          clearContent(document.querySelector(".carsearcher-content"));
         carSearchermobile_backHTML();
         carSearchermobile_bannerSubSearcher(cars, Object.values(vars.brandsObject[cars]));
         document.querySelector('.carsearcher-content').animate(
           [
               { transform: `translateX(${window.innerHeight}px)` },
               { transform: "translateX(0px)" },
           ],
           {
               // timing options
               duration: 700,
               iterations: 1,
             },
       )
        
        
        },300)

        }
     
      
      });
    });
  };
