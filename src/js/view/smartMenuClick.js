'use strict'

export function smartMenuClick () {
    window.addEventListener("click", (e) => {
      document.querySelector(".smartMenu--top").addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        document.querySelector('.smartMenu--top').classList.add('smartMenu--inactive')
  
      });
    });
  
    window.addEventListener("scroll",(e)=>{
      if (window.scrollY<100)    document.querySelector('.smartMenu--top').classList.add('smartMenu--inactive')
  
      if (window.scrollY>100) document.querySelector('.smartMenu--top').classList.remove('smartMenu--inactive')
    })
  
  
  
  };
  
