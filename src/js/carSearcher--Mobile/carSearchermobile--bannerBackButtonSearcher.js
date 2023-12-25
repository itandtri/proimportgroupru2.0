'use strict'

import {clearContent} from "../globalscripts/clearcontent"
import {carSearchermobile_main} from "./carSearchermobile_main"
import {carSearchermobile_click} from "./carSearchermobile--click"

export function carSearchermobile_bannerBackButtonSearcher (brandsNames, brandsObject) {
    document.querySelector(".banner-back").addEventListener("click", (e) => {
      setTimeout (()=>{
        clearContent(document.querySelector(".carsearcher-content"));
        carSearchermobile_main(brandsNames, brandsObject, ".carsearcher-content");
        carSearchermobile_click(brandsNames, brandsObject);

        document.querySelector('.carsearcher-content').animate(
          [
            { transform: `translateX(-${window.innerHeight}px)` },
              { transform: "translateX(0px)" }
          ],
          {
              // timing options
              duration: 700,
              iterations: 1,
            })

      },500)

      document.querySelector('.carsearcher-content').animate(
        [
            { transform: `translateX(0)` },
            { transform: `translateX(${window.innerHeight}px)` },
            
        ],
        {
            // timing options
            duration: 800,
            iterations: 1,
          },
    )

    });
  };


  /*          document.querySelector('.carsearcher-content').animate(
    [
      { transform: `translateX(-${window.innerHeight}px)` },
        { transform: `translateX(0)` },
        
    ],
    {
        // timing options
        duration: 800,
        iterations: 1,
      },
)
 setTimeout (()=>{
      clearContent(document.querySelector(".carsearcher-content"));
      carSearchermobile_main(brandsNames, brandsObject, ".carsearcher-content");
      carSearchermobile_click(brandsNames, brandsObject);
 document.querySelector('.carsearcher-content').animate(
   [
          { transform: "translateX(0px)" },
       { transform: `translateX(${window.innerHeight}px)` },
   ],
   {
       // timing options
       duration: 700,
       iterations: 1,
     },
)


},300)

*/