'use strict'


import { clearContent } from "../globalscripts/clearcontent";
import {addDataBrand} from "../carcatalog/addDataBrand"
import {catalogContent} from "../carcatalog/catalogContent"
import {brandsObject} from "../carcatalog/variables"
import { carSearchermobile_bannerBackButtonSearcher } from "./carSearchermobile--bannerBackButtonSearcher";
import { carSearchermobile_hide } from "./carSearchermobile--hide";

export function carSearchermobile_bannerSubSearcherShowAllCars (cars) {
    document.querySelectorAll(".allCars").forEach((el) => {
      el.addEventListener("click", (e) => {
        clearContent(document.querySelector(".carsCatalog"));
        addDataBrand(cars);
        catalogContent(cars, brandsObject);
        carSearchermobile_hide()
        console.log(el);
        setTimeout(()=>{
          document.querySelector(`.${el.classList[1]}.subsection--content`) ? document.querySelector(`.${el.classList[1]}.subsection--content`).scrollIntoView({ behavior: "smooth" }) 
          : document.querySelector(`.navigation-catalog-button`).scrollIntoView({ behavior: "smooth" })

        },500)

      });

    });
  };