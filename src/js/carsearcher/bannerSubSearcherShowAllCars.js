'use strict'


import { clearContent } from "../globalscripts/clearcontent";
import {addDataBrand} from "../carcatalog/addDataBrand"
import {catalogContent} from "../carcatalog/catalogContent"
import {brandsObject} from "../carcatalog/variables"

export function bannerSubSearcherShowAllCars (cars) {
    document.querySelectorAll(".allCars").forEach((el) => {
      el.addEventListener("click", (e) => {
        clearContent(document.querySelector(".carsCatalog"));
        addDataBrand(cars);
        catalogContent(cars, brandsObject);
        e.target.classList[1] == "banner"
          ? document.querySelector(".kunteynir").scrollIntoView({ behavior: "smooth" })
          : document
              .querySelector(`.${el.classList[1]}`)
              .scrollIntoView({ behavior: "smooth" });
      });
    });
  };