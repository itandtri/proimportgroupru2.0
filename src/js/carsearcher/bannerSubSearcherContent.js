'use strict'

import {lazyimg} from "../carcatalog/lazyimg"

export function bannerSubSearcherContent (obj) {
    document.querySelector(".banner-content").insertAdjacentHTML(
      "beforeend",
      `
    <div class = "banner-search banner allCars" style=" 
    background: url('../../data/brand logos/${obj[0].brandtitle.toLowerCase()}.png') no-repeat 22px;
    background-size: 30px;">
    Все модели <span>${obj[0].brandtitle}</span>
    </div>
    `
    );
  
    obj.forEach((e) => {
      const x = e.name;
      let y = x.split(" ")
      if(y[0]==='VOLKSWAGEN') y[0]='VW'
      if(y[0]==='MERCEDES-BENZ') y[0]='MB'
  
  
      let z = y.join('')
      lazyimg(e)
      document.querySelector(".banner-content").insertAdjacentHTML(
  
        "beforeend",
        `<div class = "allCars ${z} banner-search banner searcherGrid" style=" 
        background: url( ${e.lazyimg}) no-repeat 10px;
        background-size: 50px;">
        <span>${y.join(' ')}</span> 
    
    </a>
    `
      );
    });
  };