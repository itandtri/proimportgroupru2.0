'use strict'

export function carSearchermobile_backHTML_hide () {
    document.querySelector('.carsearcher-mobile').insertAdjacentHTML(
      "beforeend",
      `<div class = "banner-search banner banner-back hide">
      <img src='./data/cross.svg'/>
  </div>
  `
    );
  };
  
  