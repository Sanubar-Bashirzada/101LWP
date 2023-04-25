const btn=document.getElementById("btn");
const cont=document.getElementById("cont");
const cards=document.getElementById("cards");
const icon=document.getElementById("icon");
btn.addEventListener("click",function(){
    // cont.style.backgroundColor="black";
    // cards.style.backgroundColor="#2f2f2f";
    // cards.style.color="white";
  
    cards.classList.toggle("dark");
    cont.classList.toggle("dark1")  
  // fa-sun.classList.remove(" fa-sun");
  // fa-moon.classList.add("fa-moon");

  if (icon.className="fas fa-sun") {
   icon.className="fas fa-moon"
   
  }
   else {
    icon.className="fas fa-moon"
   
   }
})