let e;var t,r=globalThis,o={},a={},n=r.parcelRequireafba;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},r.parcelRequireafba=n),n.register;var s=n("22UTA"),i={};function u(e){e.insertAdjacentHTML("beforebegin",`
<div class = 'stockContainer subsection--content'>
</div>
`)}i=JSON.parse('{"cars":[{"name":"LIXIANG L7","brand":"LIXIANG","city":"АЛМАТЫ","status":"Цена \'Под Ключ\'","year":"2023","img":["/data/stock_cars/lil7pro/lil7.png"],"type":"последовательный гибрид","nedc":"1100 km","edition":"PRO","engine":"449 л/с","drive":"полный","details":"/data/pdf/li.pdf","phone":"+79818005080","youtube":"https://youtu.be/xbTuJiEHPFM?si=vbPEL_UD72PGADdV"},{"name":"LEOPARD 5","brand":"LEOPARD","status":"Цена \'Под Ключ\'","year":"2023","img":["data/carimg/leopard5.png"],"type":"PHEV","edition":"exploration","engine":"194 + 660 л/с","drive":"полный","details":"/data/pdf/leopard5.pdf","phone":"+79818005080","review":"","fuel":"1.8 л/100км"},{"name":"MERCEDES-BENZ EQE SUV","brand":"MERCEDESBENZ","city":"АЛМАТЫ","status":"Цена \'Под Ключ\'","year":"2023","img":["data/carimg/mercedes-benzeqesuv.png"],"type":"электромобиль","nedc":"609 km","edition":"500 4MATIC","engine":"408 л/с","drive":"полный","details":"/data/pdf/mbeqesuv.pdf","phone":"+79818005080"},{"name":"HAVAL H5","brand":"HAVAL","city":"АЛМАТЫ","status":"Цена \'Под Ключ\'","year":"2023","img":["data/carimg/havalh5.png"],"type":"бензин","edition":"2.0T AWD","fuel":"8.8 л/100 км","engine":"224 л/с","drive":"полный","details":"/data/pdf/havalh5.pdf","phone":"+79818005080"},{"name":"POLAR STONE 01","brand":"POLARSTONE","status":"Цена \'Под Ключ\'","year":"2023","img":["/data/carimg/polarstone01.png"],"type":"последовательный гибрид","edition":"7 seats version","engine":"476 л/с","drive":"полный","details":"/data/pdf/polarstone01.pdf","phone":"+79818005080","review":"","nedc":"1115 km"},{"name":"AVATR 11","brand":"AVATR","status":"Цена \'Под Ключ\'","year":"2023","img":["/data/stock_cars/avatr11/avatr11.png"],"edition":"116kw AWD 5-seats","type":"электромобиль","drive":"полный","nedc":"700 km","engine":"578 л/с","details":"/data/pdf/avatr11.pdf","phone":"+79818005080"},{"name":"VOYAH FREE 2024","brand":"VOYAH","status":"В НАЛИЧИИ","year":"2022","img":["/data/carimg/voyahfree2024.png"],"type":"последовательный гибрид","nedc":"860 km","edition":"exclusive luxury","engine":"694 л/с","drive":"полный","details":"/data/pdf/voyahfree.pdf","phone":"+79110024444","review":"","youtube":"https://youtu.be/2E20rNHyQSU?si=Hrv7A4GfEZkeWl-T"},{"name":"TANK 400 Hi4-T","brand":"TANK","status":"Цена \'Под Ключ\'","year":"2023","img":["/data/stock_cars/tank400/tank400hi4-t.png"],"type":"PHEV","edition":"functional","engine":"415 л/с","drive":"полный","details":"/data/pdf/tank400hi4-t.pdf","phone":"+79818005080","review":"","fuel":"2.6 л/100км"}]}');let d=[];document.querySelectorAll(".stockSlider").length;var s=n("22UTA"),c=n("aAja9");!function(e,t){e.cars.forEach(e=>t.push(e))}((t=i)&&t.__esModule?t.default:t,s.stockArr),(0,c.addPrice)(s.stockArr),window.innerWidth>700&&u(document.querySelector(".banner")),window.innerWidth<700&&u(document.querySelector(".navActive")),(0,s.stockArr).forEach((e,t)=>{let r,o,a=[],n=[],s=e.name.split(" ").join("");e.img.forEach((e,t)=>{a.push(`<img class="stockSlider__photos__img lazystockslider ${s} slide-${t} " src="${e}" >`),n.push(`<button class="dots__dot" data-dots="${t}"></button>`)}),r=a.join(" "),o=n.join(" "),document.querySelector(".stockContainer").insertAdjacentHTML("beforeend",`
<div class ='stockSlider'>
<div class = 'stockSlider__container contHeigh'>

<h3 style='font-weight:bold; color:#2f2f2f'> \u{413}\u{41E}\u{420}\u{42F}\u{427}E\u{415} \u{41F}\u{420}\u{415}\u{414}\u{41B}\u{41E}\u{416}\u{415}\u{41D}\u{418}E</h3>

 <div class = 'stockSlider__photoslider'>
  <div class = 'stockSlider__photos'>
    
${r}

  </div>
  
  <!--<div class = 'stockSlider__dotscontainer '>
 ${o}
 </div>-->
 </div>

 

  <div class = 'stockSlider__name'> <h3>${e.name}</h3> <h3 style="margin-top:10px;font-weight:normal;font-size:18px">  ${e.edition}</h3></div>

  <div class = 'stockSlider__textContainer'>




  <div class='stockSlider__textDescription'>
  <h2 style="color:red;font-size:20px"> ${e.status} </h2>
  <p>\u{2022} <b> \u{433}\u{43E}\u{434}:</b> ${e.year}</p>
  <p>\u{2022} <b> \u{442}\u{438}\u{43F}:</b> ${e.type}</p>
  <p>\u{2022} <b> \u{43C}\u{43E}\u{449}\u{43D}\u{43E}\u{441}\u{442}\u{44C}:</b> ${e.engine}</p>
  <p>\u{2022} <b> ${e.nedc?"запас хода:":"расход топлива:"}</b> ${e.nedc?e.nedc:e.fuel}</p>
  <p>\u{2022} <b> \u{43F}\u{440}\u{438}\u{432}\u{43E}\u{434}:</b> ${e.drive}</p>
  </div>

   


  


 

</div>
<div class='stockSlider__bottomButtons'>
<div class="media_block stock">
<div class="submenu_button stock"><a href="${e.telegram?e.telegram:"https://t.me/ProImportGroup"}"><img src="/data/telegram.png" ></a></div>
<div class=" submenu_button stock"><a href="https://wa.me/${e.phone}?text=\u{417}\u{434}\u{440}\u{430}\u{432}\u{441}\u{442}\u{432}\u{443}\u{439}\u{442}\u{435},%20\u{438}\u{43D}\u{442}\u{435}\u{440}\u{435}\u{441}\u{443}\u{435}\u{442}%20\u{432}\u{430}\u{448}\u{435}%20\u{43E}\u{431}\u{44A}\u{44F}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{435}%20\u{43E}%20\u{43F}\u{440}\u{43E}\u{434}\u{430}\u{436}\u{435}%20\u{43C}\u{430}\u{448}\u{438}\u{43D}\u{44B}%20${e.name}. "><img src="/data/whatsapp.png" ></a></div>
<div class=" submenu_button stock"><a href="https://vk.com/proimportgroup"><img src="/data/vk.png" ></a></div>

<div class=" submenu_button stock"><a href="${e.youtube?e.youtube:"https://www.youtube.com/channel/UCQuilD9fF_lgUBmitNJM7nQ"}"><img src="/data/youtube.png" ></a></div>

</div>

<div class = 'stockSLider__price'><a href="${e.details}"> ${e.price?e.price+" USD":e.priceRU+" USD"} </a></div>
</div>

<p class="stock-details" style="text-align:center"> 
<a href="${e.details}" style="color:#1937b9;cursor:pointer;font-family:open-sans-light;font-size:16px;margin-left:auto;margin-right:auto;">
\u{43F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{435}\u{435}</a> 
</p>

</div>

`)}),function(e){e.forEach(e=>{let t=e.name.split(" ").join("");d.push(t)})}(s.stockArr),document.querySelectorAll(".stockSlider").forEach((e,t)=>{e.style.transform=`translateX(${100*t}%)`}),document.querySelectorAll(`img.stockSlider__photos__img.${e}`).forEach((e,t)=>{e.style.transform=`translateX(${100*t}%)`}),d.forEach(e=>{document.querySelectorAll(`.${e}`).forEach((e,t)=>{e.style.transform=`translateX(${100*t}%)`})}),document.querySelector(".stockContainer").insertAdjacentHTML("beforeend",`
    <div class ='stockSlider__button__container'>
    <button class='stockSLider__button stockBtnLeft'> \u{2190} </button>
    <button class='stockSLider__button stockBtnRight'> \u{2192} </button>
    </div>`),function(){let e=0,t=document.querySelectorAll(".stockSlider").length-1,r=!1;setInterval(()=>{r||(e===t?(e=0,document.querySelectorAll(".stockSlider").forEach((t,r)=>{t.style.transform=`translateX(${100*(r-e)}%)`})):(e++,document.querySelectorAll(".stockSlider").forEach((t,r)=>{t.style.transform=`translateX(${100*(r-e)}%)`})))},8e3),document.querySelector(".stockContainer").addEventListener("mouseover",()=>{r=!0}),document.querySelector(".stockContainer").addEventListener("mouseout",()=>{r=!1}),document.querySelector(".stockContainer").addEventListener("touchstart",()=>{r=!0}),document.querySelector(".stockContainer").addEventListener("touchmove",()=>{r=!0}),document.querySelector(".stockContainer").addEventListener("touchend",()=>{r=!1}),document.querySelector(".stockBtnRight").addEventListener("click",()=>{e===t?(e=0,document.querySelectorAll(".stockSlider").forEach((t,r)=>{t.style.transform=`translateX(${100*(r-e)}%)`})):(e++,document.querySelectorAll(".stockSlider").forEach((t,r)=>{t.style.transform=`translateX(${100*(r-e)}%)`}))}),document.querySelector(".stockBtnLeft").addEventListener("click",()=>{0===e?(e=t,document.querySelectorAll(".stockSlider").forEach((t,r)=>{t.style.transform=`translateX(${100*(r-e)}%)`})):(e--,document.querySelectorAll(".stockSlider").forEach((t,r)=>{t.style.transform=`translateX(${100*(r-e)}%)`}))})}(),document.querySelectorAll("img.stockSlider__photos__img").forEach(e=>{e.addEventListener("load",e=>e.target.classList.remove("lazystockslider"))});
//# sourceMappingURL=index.256c2ca4.js.map
