'use strict'

export function bannerContent () {
    document.querySelector(".banner-content").insertAdjacentHTML(
      "afterbegin",
      `
    <div style="margin-bottom: 10px; margin-top:5px"> 
     <button class = "banner-find">
     <span class ="animate-charcter">Марка, модель</span>
     </button>
     </div>
      
     <p style="margin-top:40px;padding-bottom: 25px;"><a style="cursor:pointer;;font-size:22px; color:#1937b9; font-family:open-sans-light; " href='https://t.me/ProImportGroup/483'> «АВТО Под Заказ» </a>
     <br><a href='https://t.me/ProImportGroup/483' style=" color:#1937b9;font-size:20px;font-family:open-sans-light;">Прайс-Лист</a>
     </p>
    
      <p class="banner--payment"><strong style = "color:#F90009; font-size:25px"><br>НАЙДИТЕ СВОЙ АВТОМОБИЛЬ МЕЧТЫ
      </strong>
      <br>
      <strong style="color:#2f2f2f;"><br>ОПЛАТА ОСТАТКА
      <br>ПОСЛЕ ПРИБЫТИЯ И ОСМОТРА
      <br>АВТОМОБИЛЯ НА СВХ <br> МИНСК</strong>
      </p>
   
      <p style="margin:30px 30px 0px 30px"> 
      <a href="./pages/main/shipping.html" class='banner-content-i'
      style="color:#1937b9;cursor:pointer;font-family:open-sans-light;font-size:16px">
      подробнее</span> 
     </p>
  
   
    </div>`
    );
  };

