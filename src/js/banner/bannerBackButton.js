'use strict'


import { clearContent } from "../globalscripts/clearcontent";
import { bannerContent } from "./bannerContent";
import { bannerController } from "./bannerController";
import * as vars from "../carcatalog/variables"

export function bannerBackButton () {

  if (document.querySelector(".banner-back"))  {
    
    document.querySelector(".banner-back").addEventListener("click", (e) => {
      clearContent(document.querySelector(".banner-content"));
      bannerContent();
      bannerController(vars.brandsNames, vars.brandsObject);
    }); }
  };