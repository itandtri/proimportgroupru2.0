'use strict'

export function navObserver () {

    if (window.innerWidth >700) {
    const obsCallback = function (entries, observer) {
  
      if (!entries[0].isIntersecting) {
        document.querySelector(".header-header").classList.add("fixed");
        document.querySelector(".main-nav").classList.add("fixed");
      } else {
        document.querySelector(".header-header").classList.remove("fixed");
        document.querySelector(".main-nav").classList.remove("fixed");
      }
    };
  
    const obsOptions = {
      root: null,
      threshold: [0]
    };
  
    const observer = new IntersectionObserver(obsCallback, obsOptions);
  
    window.onload = function(){ observer.observe(document.querySelector(".main"));}
  }

  if(document.querySelectorAll('.block')){

    document.addEventListener('DOMContentLoaded', function() {
      let blocks = document.querySelectorAll('.block');
   
      function checkBlocksVisibility() {
          let windowHeight = window.innerHeight;
   
          blocks.forEach(block => {
              let blockPosition = block.getBoundingClientRect().top;
   
              if (blockPosition <= windowHeight - 100) {
                  block.style.opacity = "1";
                  block.style.transform = "translateY(0)";
              }
          });
      }
   
      checkBlocksVisibility();
   
      window.addEventListener('scroll', function() {
          checkBlocksVisibility();
      });
  });
  }
  };

