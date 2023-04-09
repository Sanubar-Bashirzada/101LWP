
let num1;
let num2;
let num3;
num1 = +prompt("birinci ededi daxil et");
num2 = +prompt("ikinci ededi daxil et");
num3 = +prompt("ucuncu  ededi daxil et");


if (num1 + num2 > num1 + num3 && num1 + num2 > num2 + num3) {
    alert(`Big sum result ${num1} and ${num2}`);
} else if (num1 + num3 > num1 + num2 && num1 + num3 > num2 + num3) {
    alert(`Big sum result ${num1} and ${num3}`);
} else {
    alert(`Big sum result ${num2} and ${num3}`);
}
