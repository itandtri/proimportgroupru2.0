'use strict'

import { addDataBrand } from "./addDataBrand";
import { clearContent } from "../globalscripts/clearcontent";
import { catalogContent } from "./catalogContent";
import { brandsObject } from "./variables";


export function carsMenu () {
    document.querySelectorAll(".subsection--content").forEach((e, i) => {
      e.addEventListener("click", (e) => {
        if (
          e.target.classList.length > 0 &&
          !e.target.classList.contains("banner") &&
          !e.target.classList.contains("banner-find")
        ) {
          let cars;
          !e.target.parentNode.dataset.catalog
            ? (cars = e.target.dataset.catalog)
            : (cars = e.target.parentNode.dataset.catalog);
          clearContent( document.querySelector( ".subsection.carsCatalog"));
          addDataBrand(cars);
          catalogContent(cars, brandsObject);
  
          document.querySelector(".kunteynir").scrollIntoView({ behavior: "smooth" });
  
        }
      });
    });
  
  };

