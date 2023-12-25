'use strict'

export function convertJSONtoObject(arr, obj,jsonname) {

    jsonname.cars.forEach((e) => (obj[e.brand] = []));
    jsonname.cars.forEach((e) => obj[e.brand].push(e));
    jsonname.cars.forEach((e) => {
      if (!arr.includes(e.brand)) arr.push(e.brand);
    });
    arr.sort();
    let arr1 = [];
    arr.unshift(...arr1);
  
  };

