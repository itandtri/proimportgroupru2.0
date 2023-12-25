'use strict'

import { priceArr } from "../carcatalog/variables"
import { priceObject } from "../carcatalog/variables"
import { brandsObject } from "../carcatalog/variables"
import { stockArr } from "../carcatalog/variables"

export function addPrice(objectname){

    priceArr.forEach(e=>{
      priceObject[e].forEach(el=>{
        if (objectname===brandsObject){

        objectname[e].forEach(elem=>{
         if (elem.name == el.name)  elem.priceRU = el.priceRU
        })}
        if(objectname===stockArr){
          objectname.forEach(elem=>{
            if (elem.name == el.name)  elem.priceRU = el.priceRU
          })
        }
      })
  })

  }

