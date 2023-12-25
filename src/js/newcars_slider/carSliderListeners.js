'use strict'

export function carSliderListeners(){

let curslide=0

const maxslide=document.querySelectorAll('.stockSlider').length - 1

let isFalse=false

   const intervalSLider = setInterval(()=>{

    if (!isFalse){
    if(curslide===maxslide){
      curslide=0
      document.querySelectorAll('.stockSlider').forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
    

    }
    else{
    curslide++

    document.querySelectorAll('.stockSlider').forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
    
    }
}},8000)



document.querySelector('.stockContainer').addEventListener('mouseover',()=>{
isFalse=true
  
})
document.querySelector('.stockContainer').addEventListener('mouseout',()=>{
  isFalse=false
})

document.querySelector('.stockContainer').addEventListener('touchstart',()=>{
 isFalse=true

})
document.querySelector('.stockContainer').addEventListener('touchmove',()=>{
  isFalse=true
})
document.querySelector('.stockContainer').addEventListener('touchend',()=>{
  isFalse=false
  
})

    document.querySelector('.stockBtnRight').addEventListener('click',()=>{


      if(curslide===maxslide){
        curslide=0
        document.querySelectorAll('.stockSlider').forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
      
  
      }
      else{
      curslide++
  
      document.querySelectorAll('.stockSlider').forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
      
      }
      
    
  
    })
    document.querySelector('.stockBtnLeft').addEventListener('click',()=>{
      

      if(curslide===0){
        curslide=maxslide
        document.querySelectorAll('.stockSlider').forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
     
      }
      else{
        curslide--
  
        document.querySelectorAll('.stockSlider').forEach((s,i)=>{s.style.transform=`translateX(${100*(i-curslide)}%)`})
      
      }
     })
    }