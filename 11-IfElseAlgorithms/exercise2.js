let a = parseInt(prompt("1-ci ededi daxil edin: "));
let b = parseInt(prompt("2-ci ededi daxil edin: "));
let c = parseInt(prompt("3-cü ededi daxil edin: "));


let big_number = parseInt([a, b, c].sort((x, y) => y - x).join(""));
alert("Big number:", big_number);


let little_number = parseInt([a, b, c].sort((x, y) => x - y).join(""));
alert("Little number: ", little_number);