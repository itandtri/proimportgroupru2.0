'use strict'

import { carSearchermobile_backHTML_hide } from "./carSearchermobile--backHTML--hide"; 

export function carSearchermobile_main (arr, obj, elem) {


    arr.forEach((e) => {
      document.querySelector(elem).insertAdjacentHTML(
        "beforeend",
        `<div class = "banner-search banner ${obj[e][0].brand}" >
    <img class ="searcherbrand--img ${obj[e][0].brand}" src ='../../data/brand logos/${obj[e][0].brandtitle.toLowerCase()}.png')/>
    <span class = "searcherbrand--text ${obj[e][0].brand}">${obj[e][0].brandtitle}</span>
    </div>
    `
      );
    });
  document.querySelector(".hide") ? document.querySelector(".hide").remove() : ""
  carSearchermobile_backHTML_hide();
  };

  /*style=" 
        background: url('../../data/brand logos/${obj[e][0].brandtitle.toLowerCase()}.png') no-repeat 22px;
        background-size: 30px;"*/