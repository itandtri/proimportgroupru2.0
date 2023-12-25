'use strict'

import { searcherBackHTML } from "./searcherBackHTML";
import { clearContent } from "../globalscripts/clearcontent";
import { bannerSubSearcher } from "./bannerSubSearcher";
import { bannerBackButton } from "../banner/bannerBackButton";

import * as vars from "../carcatalog/variables"

export function searcherClickButton () {
    document.querySelectorAll(".banner-search").forEach((e, i) => {
      e.addEventListener("click", (e) => {
        if (i>0){
    
        let cars;
        if (!e.target.classList.contains("banner-back")) {
          !e.target.childNodes[1]
            ? (cars = e.target.textContent)
            : (cars = e.target.childNodes[1].innerText);
        }
        if (!cars) bannerBackButton();

       cars ? cars = cars.split(" ").join("") : ""

        if (cars) { 
          clearContent(document.querySelector(".banner-content"));
          searcherBackHTML();
          bannerSubSearcher(cars, Object.values(vars.brandsObject[cars]));
        }
     
      }
      });
    });
  };
