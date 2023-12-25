'use strict'

import { stockArr } from "../carcatalog/variables"
import { carName } from "./stockSliderVars"

export function stockSliderContainer(){
  stockArr.forEach((e,i)=>{
  let arr=[]
  let arr2=[]
  let y
  let q
  let carName=e.name.split(' ').join('')

  e.img.forEach((el,i)=>{
    arr.push(     `<img class="stockSlider__photos__img lazystockslider ${carName} slide-${i} " src="${el}" >`
    )
    arr2.push(`<button class="dots__dot" data-dots="${i}"></button>`)
  })
y=arr.join(' ')
q=arr2.join(' ')
 
document.querySelector('.stockContainer').insertAdjacentHTML('beforeend',

`
<div class ='stockSlider'>
<div class = 'stockSlider__container contHeigh'>

<h3 style='font-weight:bold; color:#2f2f2f'> ГОРЯЧEЕ ПРЕДЛОЖЕНИE</h3>

 <div class = 'stockSlider__photoslider'>
  <div class = 'stockSlider__photos'>
    
${y}

  </div>
  
  <!--<div class = 'stockSlider__dotscontainer '>
 ${q}
 </div>-->
 </div>

 

  <div class = 'stockSlider__name'> <h3>${e.name}</h3> <h3 style="margin-top:10px;font-weight:normal;font-size:18px">  ${e.edition}</h3></div>

  <div class = 'stockSlider__textContainer'>




  <div class='stockSlider__textDescription'>
  <h2 style="color:red;font-size:20px"> ${e.status} </h2>
  <p>• <b> год:</b> ${e.year}</p>
  <p>• <b> тип:</b> ${e.type}</p>
  <p>• <b> мощность:</b> ${e.engine}</p>
  <p>• <b> ${e.nedc? 'запас хода:' : 'расход топлива:'}</b> ${e.nedc? e.nedc : e.fuel}</p>
  <p>• <b> привод:</b> ${e.drive}</p>
  </div>

   


  


 

</div>
<div class='stockSlider__bottomButtons'>
<div class="media_block stock">
<div class="submenu_button stock"><a href="${e.telegram? e.telegram: "https://t.me/ProImportGroup"}"><img src="/data/telegram.png" ></a></div>
<div class=" submenu_button stock"><a href="https://wa.me/${e.phone}?text=Здравствуйте,%20интересует%20ваше%20объявление%20о%20продаже%20машины%20${e.name}. "><img src="/data/whatsapp.png" ></a></div>
<div class=" submenu_button stock"><a href="https://vk.com/proimportgroup"><img src="/data/vk.png" ></a></div>

<div class=" submenu_button stock"><a href="${e.youtube? e.youtube : 'https://www.youtube.com/channel/UCQuilD9fF_lgUBmitNJM7nQ'}"><img src="/data/youtube.png" ></a></div>

</div>

<div class = 'stockSLider__price'><a href="${e.details}"> ${e.price ? e.price+" "+'USD' : e.priceRU+" "+'USD'} </a></div>
</div>

<p class="stock-details" style="text-align:center"> 
<a href="${e.details}" style="color:#1937b9;cursor:pointer;font-family:open-sans-light;font-size:16px;margin-left:auto;margin-right:auto;">
подробнее</a> 
</p>

</div>

`)

})


}