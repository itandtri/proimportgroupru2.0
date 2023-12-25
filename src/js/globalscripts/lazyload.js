'use strict'



export function lazyLoad (target) {

  const io = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{

      if(entry.isIntersecting){
        entry.target.src = entry.target.dataset.src
        entry.target.addEventListener("load",e=>{
          e.target.classList.remove("lazy-img")
        })
        observer.disconnect()
      }
    })
  })

  io.observe(target)
  




};
  let imgTargets = document.querySelectorAll("img[data-src]");
  imgTargets.forEach(lazyLoad)

