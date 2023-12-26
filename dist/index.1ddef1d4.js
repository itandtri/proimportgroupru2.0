var e=globalThis,n={},t={},r=e.parcelRequireafba;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var u={id:e,exports:{}};return n[e]=u,r.call(u.exports,u,u.exports),u.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequireafba=r),r.register;var u=r("22UTA");function a(){document.querySelector(".banner-content").insertAdjacentHTML("afterbegin",`
    <div style="margin-bottom: 10px; margin-top:5px"> 
     <button class = "banner-find">
     <span class ="animate-charcter">\u{41C}\u{430}\u{440}\u{43A}\u{430}, \u{43C}\u{43E}\u{434}\u{435}\u{43B}\u{44C}</span>
     </button>
     </div>
      
     <p style="margin-top:40px;padding-bottom: 25px;"><a style="cursor:pointer;;font-size:22px; color:#1937b9; font-family:open-sans-light; " href='https://t.me/ProImportGroup/483'> \xab\u{410}\u{412}\u{422}\u{41E} \u{41F}\u{43E}\u{434} \u{417}\u{430}\u{43A}\u{430}\u{437}\xbb </a>
     <br><a href='https://t.me/ProImportGroup/483' style=" color:#1937b9;font-size:20px;font-family:open-sans-light;">\u{41F}\u{440}\u{430}\u{439}\u{441}-\u{41B}\u{438}\u{441}\u{442}</a>
     </p>
    
      <p class="banner--payment"><strong style = "color:#F90009; font-size:25px"><br>\u{41D}\u{410}\u{419}\u{414}\u{418}\u{422}\u{415} \u{421}\u{412}\u{41E}\u{419} \u{410}\u{412}\u{422}\u{41E}\u{41C}\u{41E}\u{411}\u{418}\u{41B}\u{42C} \u{41C}\u{415}\u{427}\u{422}\u{42B}
      </strong>
      <br>
      <strong style="color:#2f2f2f;"><br>\u{41E}\u{41F}\u{41B}\u{410}\u{422}\u{410} \u{41E}\u{421}\u{422}\u{410}\u{422}\u{41A}\u{410}
      <br>\u{41F}\u{41E}\u{421}\u{41B}\u{415} \u{41F}\u{420}\u{418}\u{411}\u{42B}\u{422}\u{418}\u{42F} \u{418} \u{41E}\u{421}\u{41C}\u{41E}\u{422}\u{420}\u{410}
      <br>\u{410}\u{412}\u{422}\u{41E}\u{41C}\u{41E}\u{411}\u{418}\u{41B}\u{42F} \u{41D}\u{410} \u{421}\u{412}\u{425} <br> \u{41C}\u{418}\u{41D}\u{421}\u{41A}</strong>
      </p>
   
      <p style="margin:30px 30px 0px 30px"> 
      <a href="./pages/main/shipping.html" class='banner-content-i'
      style="color:#1937b9;cursor:pointer;font-family:open-sans-light;font-size:16px">
      \u{43F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{435}\u{435}</span> 
     </p>
  
   
    </div>`)}function o(){document.querySelector(".banner-content").insertAdjacentHTML("beforeend",`<div class = "banner-search banner banner-back">
  \u{43D}\u{430}\u{437}\u{430}\u{434}
  </div>
  `)}function c(e,n,t){e.forEach(e=>{document.querySelector(t).insertAdjacentHTML("beforeend",`<div class = "banner-search banner" style=" 
        background: url('../../data/brand logos/${n[e][0].brandtitle.toLowerCase()}.png') no-repeat 22px;
        background-size: 30px;">
    <span>${n[e][0].brandtitle}</span>
    </div>
    `)}),o()}var s=(r("cESBk"),r("cESBk")),u=r("22UTA");function l(){document.querySelector(".banner-back")&&document.querySelector(".banner-back").addEventListener("click",e=>{(0,s.clearContent)(document.querySelector(".banner-content")),a(),m(u.brandsNames,u.brandsObject)})}var s=(r("cESBk"),r("cESBk")),i=r("7z7wC"),s=r("cESBk"),b=r("gIKRB"),d=r("6tXnG"),u=(r("22UTA"),r("22UTA"),r("22UTA"));function p(){document.querySelectorAll(".banner-search").forEach((e,n)=>{e.addEventListener("click",e=>{if(n>0){let n;if(e.target.classList.contains("banner-back")||(n=e.target.childNodes[1]?e.target.childNodes[1].innerText:e.target.textContent),n||l(),n&&(n=n.split(" ").join("")),n){var t,r,a,m;(0,s.clearContent)(document.querySelector(".banner-content")),o(),t=n,r=Object.values(u.brandsObject[n]),a=u.brandsNames,m=u.brandsObject,document.querySelector(".banner-back").addEventListener("click",e=>{(0,s.clearContent)(document.querySelector(".banner-content")),c(a,m,".banner-content"),p(a,m),l()}),document.querySelector(".banner-content").insertAdjacentHTML("beforeend",`
    <div class = "banner-search banner allCars" style=" 
    background: url('../../data/brand logos/${r[0].brandtitle.toLowerCase()}.png') no-repeat 22px;
    background-size: 30px;">
    \u{412}\u{441}\u{435} \u{43C}\u{43E}\u{434}\u{435}\u{43B}\u{438} <span>${r[0].brandtitle}</span>
    </div>
    `),r.forEach(e=>{let n=e.name.split(" ");"VOLKSWAGEN"===n[0]&&(n[0]="VW"),"MERCEDES-BENZ"===n[0]&&(n[0]="MB");let t=n.join("");(0,i.lazyimg)(e),document.querySelector(".banner-content").insertAdjacentHTML("beforeend",`<div class = "allCars ${t} banner-search banner searcherGrid" style=" 
        background: url( ${e.lazyimg}) no-repeat 10px;
        background-size: 50px;">
        <span>${n.join(" ")}</span> 
    
    </a>
    `)}),document.querySelectorAll(".allCars").forEach(e=>{e.addEventListener("click",n=>{(0,s.clearContent)(document.querySelector(".carsCatalog")),(0,b.addDataBrand)(t),(0,d.catalogContent)(t,u.brandsObject),"banner"==n.target.classList[1]?document.querySelector(".kunteynir").scrollIntoView({behavior:"smooth"}):document.querySelector(`.${e.classList[1]}`).scrollIntoView({behavior:"smooth"})})})}}})})}function m(e,n){document.querySelector(".banner-find").addEventListener("click",()=>{(0,s.clearContent)(document.querySelector(".banner-content")),p(),c(e,n,".banner-content"),l(".banner-content"),p()})}window.innerWidth>700&&(document.querySelector(".carsCatalog").insertAdjacentHTML("afterbegin",`
      <div class = "subsection--content mainMenu banner ">
  
      <div class = "banner-content banner contHeigh">
      </div>
      `),a(),m(u.brandsNames,u.brandsObject));
//# sourceMappingURL=index.1ddef1d4.js.map
