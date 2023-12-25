'use strict'

export function addDataBrand (x) {
    document.querySelectorAll(".navigation-catalog-button").forEach((e) => {
      e.dataset.brand = x;
    });
  };