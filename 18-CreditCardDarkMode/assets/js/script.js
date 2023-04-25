const btn=document.getElementById("btn");
const cont=document.getElementById("cont");
const cards=document.getElementById("cards");
const icon=document.getElementById("icon");
let sun=true
btn.addEventListener("click",function(){
    
  
    cards.classList.toggle("dark");
    cont.classList.toggle("dark1")  
 

  if (sun) {
   icon.className="fas fa-moon"
   sun=false;
  }
   else {
    icon.className="fas fa-sun"
   sun=true;
   }
})