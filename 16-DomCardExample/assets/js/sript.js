const mavi=document.getElementById("mavi");
const qirmizi=document.getElementById("qirmizi");
const sari=document.getElementById("sari");
const btnblr=document.getElementById("btnblr");
const carimg=document.getElementById("carimg");

mavi.onclick=function(){
    sari.style.backgroundColor= "rgba(238, 174, 4, 255)"
    btnblr.style.backgroundColor="rgba(23, 72, 122, 255)"
    carimg.classList.remove("redrot");
    carimg.src="./assets/imgs/pngegg (1).png";
}

qirmizi.onclick=function() {
    sari.style.backgroundColor= "rgba(186, 36, 62, 255)"
    btnblr.style.backgroundColor="rgba(186, 36, 62, 255)"
    let carimg=document.getElementById("carimg")
    carimg.classList.add("redrot")
    carimg.src="./assets/imgs/red.png";
    
   
}
