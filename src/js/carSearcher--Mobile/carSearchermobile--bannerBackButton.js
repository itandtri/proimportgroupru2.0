'use strict'
import { clearContent } from "../globalscripts/clearcontent";
import { carSearchermobile_main } from "./carSearchermobile_main";
//import { bannerController } from "./bannerController";
import * as vars from "../carcatalog/variables"

export function carSearchermobile_bannerBackButton () {

  if (document.querySelector(".banner-back.hide"))  {
    
    console.log('click');
    /*document.querySelector(".banner-back").addEventListe
    ner("click", (e) => {
      console.log('banner back');
      clearContent(document.querySelector(".carsearcher-content"));
      carSearchermobile_main(vars.brandsNames,vars.brandsObject , ".carsearcher-content");
      bannerController(vars.brandsNames, vars.brandsObject);
      
        })*/

       
        document.querySelector('.carsearcher-mobile').animate(
          [
              { transform: "translateY(0)" },
              { transform: `translateY(-${window.innerHeight}px)` },
          ],
          {
              // timing options
              duration: 500,
              iterations: 1,
            },
      )

       setTimeout(()=>{document.querySelector('.carsearcher-mobile').style.visibility='hidden'} ,500)   
           window.onscroll=function(){};
 

}
  };