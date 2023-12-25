'use strict'

import {arrNames} from "./stockSliderVars"


export function stockSliderContent(database) {
  database.forEach((e)=>{
 let x =  e.name.split(' ').join('')
  arrNames.push(x)
})}