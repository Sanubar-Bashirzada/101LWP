 let number = prompt("3 reqemli eded daxil edin")
 let digits = [];
 


 if(number >= 100 && number <= 999){
   digits = number.toString().split("").map(Number);
   alert("Result: " + digits.join(", "));
 } else {
   alert("The number is not 3 digits");
 }