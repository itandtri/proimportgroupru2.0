var e=globalThis,r={},t={},n=e.parcelRequireafba;function a(e,r,t){e.forEach(e=>{document.querySelector(t).insertAdjacentHTML("beforeend",`<div class = "banner-search banner ${r[e][0].brand}" >
    <img class ="searcherbrand--img ${r[e][0].brand}" src ='../../data/brand logos/${r[e][0].brandtitle.toLowerCase()}.png')/>
    <span class = "searcherbrand--text ${r[e][0].brand}">${r[e][0].brandtitle}</span>
    </div>
    `)}),document.querySelector(".hide")&&document.querySelector(".hide").remove(),document.querySelector(".carsearcher-mobile").insertAdjacentHTML("beforeend",`<div class = "banner-search banner banner-back hide">
      <img src='./data/cross.svg'/>
  </div>
  `)}null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequireafba=n),n.register;var o=n("22UTA"),c=(n("cESBk"),n("cESBk")),s=n("7z7wC"),c=n("cESBk"),i=n("gIKRB"),l=n("6tXnG"),o=(n("22UTA"),n("22UTA"));n("cESBk"),n("22UTA");var o=n("22UTA");window.innerWidth<700?(a(o.brandsNames,o.brandsObject,".carsearcher-content"),function e(){document.querySelectorAll(".banner-search").forEach((r,t)=>{r.addEventListener("click",r=>{let t;r.target.classList.contains("banner-back")||(t=r.target.classList[r.target.classList.length-1]),!t&&document.querySelector(".banner-back.hide")&&(console.log("click"),document.querySelector(".carsearcher-mobile").animate([{transform:"translateY(0)"},{transform:`translateY(-${window.innerHeight}px)`}],{duration:500,iterations:1}),setTimeout(()=>{document.querySelector(".carsearcher-mobile").style.visibility="hidden"},500),window.onscroll=function(){}),t&&(t=t.split(" ").join("")),t&&(document.querySelector(".carsearcher-content").animate([{transform:"translateX(0)"},{transform:`translateX(-${window.innerHeight}px)`}],{duration:800,iterations:1}),setTimeout(()=>{var r,n,d,u;(0,c.clearContent)(document.querySelector(".carsearcher-content")),document.querySelector(".carsearcher-content").insertAdjacentHTML("beforeend",`<div class = "banner-search banner banner-back">
  \u{43D}\u{430}\u{437}\u{430}\u{434}
  </div>
  `),r=t,n=Object.values(o.brandsObject[t]),d=o.brandsNames,u=o.brandsObject,document.querySelector(".banner-back").addEventListener("click",r=>{setTimeout(()=>{(0,c.clearContent)(document.querySelector(".carsearcher-content")),a(d,u,".carsearcher-content"),e(d,u),document.querySelector(".carsearcher-content").animate([{transform:`translateX(-${window.innerHeight}px)`},{transform:"translateX(0px)"}],{duration:700,iterations:1})},500),document.querySelector(".carsearcher-content").animate([{transform:"translateX(0)"},{transform:`translateX(${window.innerHeight}px)`}],{duration:800,iterations:1})}),document.querySelector(".carsearcher-content").insertAdjacentHTML("beforeend",`
    <div class = "banner-search banner allCars showallcars" style=" 
    
    background: url('../../data/brand logos/${n[0].brandtitle.toLowerCase()}.png') no-repeat 22px, #fff;
    background-size: 30px;
    text-align:right;
    padding-right:2em">
    \u{412}\u{441}\u{435} \u{43C}\u{43E}\u{434}\u{435}\u{43B}\u{438} 
    </div>
    `),n.forEach(e=>{let r=e.name.split(" "),t=r.join("");(0,s.lazyimg)(e),document.querySelector(".carsearcher-content").insertAdjacentHTML("afterbegin",`<div class = "allCars ${t} banner-search banner searcherGrid caricon" style=" 
        background-color: #fff;">
        <img class="caricon--img" src ="${e.img}"/>
        <span class="caricon--name">${r.join(" ")}</span> 
        
    `)}),document.querySelectorAll(".allCars").forEach(e=>{e.addEventListener("click",t=>{(0,c.clearContent)(document.querySelector(".carsCatalog")),(0,i.addDataBrand)(r),(0,l.catalogContent)(r,o.brandsObject),document.querySelector(".carsearcher-mobile").animate([{transform:"translateY(0)"},{transform:`translateY(-${window.innerHeight}px)`}],{duration:500,iterations:1}),setTimeout(()=>{document.querySelector(".carsearcher-mobile").style.visibility="hidden"},500),window.onscroll=function(){},console.log(e),setTimeout(()=>{document.querySelector(`.${e.classList[1]}.subsection--content`)?document.querySelector(`.${e.classList[1]}.subsection--content`).scrollIntoView({behavior:"smooth"}):document.querySelector(".navigation-catalog-button").scrollIntoView({behavior:"smooth"})},500)})}),document.querySelector(".carsearcher-content").animate([{transform:`translateX(${window.innerHeight}px)`},{transform:"translateX(0px)"}],{duration:700,iterations:1})},300))})})}(),document.querySelector(".animate-charcter").addEventListener("click",e=>{window.scrollTo({top:0,behavior:"smooth"}),document.querySelector(".carsearcher-mobile").style.visibility="visible",document.querySelector(".carsearcher-mobile").animate([{transform:`translateY(-${window.innerHeight}px)`},{transform:"translateY(0px)"}],{duration:500,iterations:1}),window.onscroll=function(){window.scrollTo(0,0)}})):document.querySelector(".animate-charcter").addEventListener("click",e=>{window.scrollTo({top:500,behavior:"smooth"})});
//# sourceMappingURL=index.b17dbacd.js.map