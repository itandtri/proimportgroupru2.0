'use strict'

export function searcherBackHTML () {
    document.querySelector(".banner-content").insertAdjacentHTML(
      "beforeend",
      `<div class = "banner-search banner banner-back">
  назад
  </div>
  `
    );
  };
  
  