'use strict'

import { searcherBackHTML } from "./searcherBackHTML"; 

export function bannerSearchContent (arr, obj, elem) {


    arr.forEach((e) => {
      document.querySelector(elem).insertAdjacentHTML(
        "beforeend",
        `<div class = "banner-search banner" style=" 
        background: url('../../data/brand logos/${obj[e][0].brandtitle.toLowerCase()}.png') no-repeat 22px;
        background-size: 30px;">
    <span>${obj[e][0].brandtitle}</span>
    </div>
    `
      );
    });
  
    searcherBackHTML();
  };