'use strict'

export function bannerGenerate () {
  document.querySelector(".carsCatalog").insertAdjacentHTML(
      "afterbegin",
      `
      <div class = "subsection--content mainMenu banner ">
  
      <div class = "banner-content banner contHeigh">
      </div>
      `
    );
  }; 

