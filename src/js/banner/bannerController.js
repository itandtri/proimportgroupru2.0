'use strict'

import { clearContent } from "../globalscripts/clearcontent";
import { bannerSearchContent } from "../carsearcher/bannerSearchContent";
import { bannerBackButton } from "./bannerBackButton";
import { searcherClickButton } from "../carsearcher/searcherClickButton";

export function bannerController (arr, obj) {
    document.querySelector(".banner-find").addEventListener("click", () => {
      clearContent(document.querySelector(".banner-content"));
      searcherClickButton();
      bannerSearchContent(arr, obj, ".banner-content");
      bannerBackButton(".banner-content");
      searcherClickButton();
    });
  };