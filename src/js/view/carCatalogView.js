'use strict'

import * as vars from "../carcatalog/variables.js"

import carsJSON from "../model/data/json/cars.json";
import pricelistJSON from "../model/data/json/pricelist.json";

import { convertJSONtoObject } from "../globalscripts/JSONconvert.js";

import { mainCatalogMenu } from "../carcatalog/mainCatalogMenu.js";

import {addPrice} from "../globalscripts/addPrice.js"


convertJSONtoObject(vars.brandsNames, vars.brandsObject,carsJSON);
convertJSONtoObject(vars.priceArr,vars.priceObject,pricelistJSON)
addPrice(vars.brandsObject)


mainCatalogMenu(vars.brandsNames, vars.brandsObject);
