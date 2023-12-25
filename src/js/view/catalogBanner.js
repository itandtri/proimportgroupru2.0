'use strict'

import * as vars from "../carcatalog/variables"
import { bannerGenerate } from "../banner/bannerGenerate";
import { bannerContent } from "../banner/bannerContent";
import { bannerController } from "../banner/bannerController";

if (window.innerWidth > 700){

bannerGenerate();
bannerContent();
bannerController(vars.brandsNames, vars.brandsObject);

}