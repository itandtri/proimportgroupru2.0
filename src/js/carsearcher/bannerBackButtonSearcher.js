'use strict'

import {clearContent} from "../globalscripts/clearcontent"
import {bannerSearchContent} from "./bannerSearchContent"
import {bannerSearcherController} from "./bannerSearcherController"

export function bannerBackButtonSearcher (brandsNames, brandsObject) {
    document.querySelector(".banner-back").addEventListener("click", (e) => {
      clearContent(document.querySelector(".banner-content"));
      bannerSearchContent(brandsNames, brandsObject, ".banner-content");
      bannerSearcherController(brandsNames, brandsObject);
    });
  };