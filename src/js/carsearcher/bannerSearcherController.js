'use strict'

import {searcherClickButton} from "./searcherClickButton"
import { bannerBackButton } from "../banner/bannerBackButton";

export function bannerSearcherController (arr, obj) {
    searcherClickButton(arr, obj);
    bannerBackButton();
  };