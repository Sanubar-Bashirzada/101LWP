
let catheter1 = parseInt(prompt("Insert the first catheter: "));
let catheter2 = parseInt(prompt("Insert the second catheter: "));
let hypotenuse = parseInt(prompt("Insert the hypotenuse: "));

if (catheter1 ** 2 + catheter2 ** 2 === hypotenuse ** 2) {
  alert("Result: It is a right triangle.");
} else {
  alert("Result:A right triangle is not a triangle.");
}