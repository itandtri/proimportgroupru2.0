'use strict'

import { bannerBackButtonSearcher } from "./bannerBackButtonSearcher";
import { bannerSubSearcherContent } from "./bannerSubSearcherContent";
import { bannerSubSearcherShowAllCars } from "./bannerSubSearcherShowAllCars";
import { brandsNames, brandsObject } from "../carcatalog/variables";

export function bannerSubSearcher (cars, obj) {

    bannerBackButtonSearcher(brandsNames, brandsObject);
    bannerSubSearcherContent(obj);
    bannerSubSearcherShowAllCars(cars);
  };

