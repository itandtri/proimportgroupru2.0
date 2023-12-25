'use strict'

import {lazyimg} from "../carcatalog/lazyimg"

export function carSearchermobile_bannerSubSearcherContent (obj) {
    document.querySelector(".carsearcher-content").insertAdjacentHTML(
      "beforeend",
      `
    <div class = "banner-search banner allCars showallcars" style=" 
    
    background: url('../../data/brand logos/${obj[0].brandtitle.toLowerCase()}.png') no-repeat 22px, #fff;
    background-size: 30px;
    text-align:right;
    padding-right:2em">
    Все модели 
    </div>
    `
    );
  
    obj.forEach((e) => {
      const x = e.name;
      let y = x.split(" ")
  
      let z = y.join('')
      lazyimg(e)
      document.querySelector(".carsearcher-content").insertAdjacentHTML(
  
        "afterbegin",
        `<div class = "allCars ${z} banner-search banner searcherGrid caricon" style=" 
        background-color: #fff;">
        <img class="caricon--img" src ="${e.img}"/>
        <span class="caricon--name">${y.join(' ')}</span> 
        
    `
      );
    });
  };


 