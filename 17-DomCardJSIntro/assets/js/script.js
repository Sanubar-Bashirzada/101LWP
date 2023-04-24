const mavi=document.getElementById("mavi");
const qirmizi=document.getElementById("qirmizi");
const sari=document.getElementById("sari");
const btnblr=document.getElementById("btnblr");
const carimg=document.getElementById("carimg");

mavi.onclick=function(){
    sari.style.backgroundColor= "rgba(238, 174, 4, 255)";
    btnblr.style.backgroundColor="rgba(23, 72, 122, 255)";
    const carimg = document.getElementById("carimg"); 
    carimg.classList.remove("redrot");
    carimg.src="./assets/imgs/pngegg (1).png";
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 100) {
        clearInterval(id);
      } else {
        pos++; 
        carimg.style.left = pos + "px"; 
      }
    }
  }


qirmizi.onclick=function() {
    sari.style.backgroundColor= "rgba(186, 36, 62, 255)";
    btnblr.style.backgroundColor="rgba(186, 36, 62, 255)";
    let carimg=document.getElementById("carimg");
    carimg.classList.add("redrot");
    carimg.src="./assets/imgs/red.png";
    let id = null;   
    let pos = -50;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 50) {
        clearInterval(id);
      } else {
        pos++; 
        
        carimg.style.left = pos + "px"; 
      }
    }
  }
    
  const numbflx =document.querySelector(".numbflx");
  console.log(numbflx.children);
  for (let i = 0; i <numbflx.children.length; i++) {
    numbflx.children[i].addEventListener("click", () => {
      for (let j = 0; j < numbflx.children.length; j++) {
        numbflx.children[j].style.cssText = "";
      }
      numbflx.children[i].style.cssText = `
      border-radius: 50%;
      width:20px;
      height:20px;
      display:flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: rgba(44, 208, 147, 255);`
      
        ;
    });
  }



  
 
  
  
  
  
  
  
  


  
   


