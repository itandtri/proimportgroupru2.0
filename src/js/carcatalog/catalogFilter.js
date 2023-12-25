'use strict'

import { brandsObject } from "./variables";
import { clearContent } from "../globalscripts/clearcontent";
import { catalogContent } from "./catalogContent";

export function catalogFilter (kunteynir) {
    let object = {};
    let autos = [];
    let cars = document.querySelectorAll(".navigation-catalog-button")[0].dataset.brand;
  
    kunteynir.forEach((e, i) => {
      e.addEventListener("click", (e) => {
        brandsObject[cars].forEach((el) => {
          if (el.type === e.target.dataset.engine || !e.target.dataset.engine) {
            autos.push(el);
          }
        });
  
        object[cars] = autos;

        clearContent(document.querySelector(".carsCatalog"));
        catalogContent(cars, object);
      });
    });
  };