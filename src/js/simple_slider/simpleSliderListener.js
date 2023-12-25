'use strict'

export function simpleSliderListeners(container,slider){

let curslide=0

const maxslide=document.querySelectorAll(slider).length - 1

let isFalse=false

   const intervalSLider = setInterval(()=>{

    if (!isFalse){
    if(curslide===maxslide){
      curslide=0
      document.querySelectorAll(slider).forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
    

    }
    else{
    curslide++

    document.querySelectorAll(slider).forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
    
    }
}},8000)


if (document.querySelector(container)){
document.querySelector(container).addEventListener('mouseover',()=>{
isFalse=true
  
})
document.querySelector(container).addEventListener('mouseout',()=>{
  isFalse=false
})

document.querySelector(container).addEventListener('touchstart',()=>{
 isFalse=true

})
document.querySelector(container).addEventListener('touchmove',()=>{
  isFalse=true
})
document.querySelector(container).addEventListener('touchend',()=>{
  isFalse=false
  
})
}

if (document.querySelector('.stockBtnRight') && document.querySelector('.stockBtnLeft')){

    document.querySelector('.stockBtnRight').addEventListener('click',()=>{


      if(curslide===maxslide){
        curslide=0
        document.querySelectorAll(slider).forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
      
  
      }
      else{
      curslide++
  
      document.querySelectorAll(slider).forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
      
      }
      
    
  
    })
    document.querySelector('.stockBtnLeft').addEventListener('click',()=>{
      

      if(curslide===0){
        curslide=maxslide
        document.querySelectorAll(slider).forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
     
      }
      else{
        curslide--
  
        document.querySelectorAll(slider).forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
      
      }
     })}
    }