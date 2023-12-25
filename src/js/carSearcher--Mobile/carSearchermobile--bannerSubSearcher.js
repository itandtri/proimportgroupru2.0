'use strict'

import { carSearchermobile_bannerBackButtonSearcher } from "./carSearchermobile--bannerBackButtonSearcher";
import { carSearchermobile_bannerSubSearcherContent } from "./carSearchermobile--bannerSubSearcherContent";
import { carSearchermobile_bannerSubSearcherShowAllCars } from "./carSearchermobile--bannerSubSearcherShowAllCars";
import { brandsNames, brandsObject } from "../carcatalog/variables";


export function carSearchermobile_bannerSubSearcher (cars, obj) {

    carSearchermobile_bannerBackButtonSearcher(brandsNames, brandsObject);
    carSearchermobile_bannerSubSearcherContent(obj);
    carSearchermobile_bannerSubSearcherShowAllCars(cars);
  };

