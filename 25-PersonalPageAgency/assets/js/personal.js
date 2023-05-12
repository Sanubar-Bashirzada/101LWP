//navbar
const bar = document.querySelector(".bar");
const resp = document.querySelector(".resp");
const nav = document.querySelector("nav");
bar.addEventListener("click", function () {
  resp.classList.toggle("responsive")
  nav.classList.toggle("header_bg")
});

//starIcon
function ratings() {
  const stars = document.createElement('div');
  stars.classList.add('testleftstar2');
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('img');
    star.src = './assets/imgs/teststar.png';

    stars.style.position = "absolute"
    stars.style.top = "30px"
    stars.appendChild(star);
  }

  return stars;
}

//card
function cardInformation(data) {
  const topone = document.createElement("div");
  topone.style.position = "relative"
  const ptop = document.createElement("p");
  const ptop1 = document.createElement("p");
  const ptop2 = document.createElement("p");
  const photo = document.createElement("img");
  const flxdiv = document.createElement("div");

  topone.classList.add('rightopnew')
  ptop.classList.add('stardigital3');
  ptop1.classList.add('martip');
  ptop2.classList.add('metap');
  photo.classList.add("human");
  flxdiv.classList.add("newflxdivs");
  ptop1.classList.add('pclass1');
  ptop2.classList.add('pclass2');

  ptop.innerText = `${data.name}`
  ptop1.innerText = `${data.species}`
  ptop2.innerText = `${data.species}`
  photo.src = './assets/imgs/graham.png'
  topone.appendChild(ptop);
  topone.appendChild(ptop1);
  topone.appendChild(ptop2);
  topone.appendChild(photo);
  flxdiv.appendChild(photo);
  flxdiv.appendChild(ptop1);
  flxdiv.appendChild(ptop2);

  topone.appendChild(ratings());

  leftestnewone1.appendChild(topone);
  leftestnewone1.appendChild(flxdiv);
  topone.appendChild(flxdiv);
};

const starfive = document.getElementById("starfive");
const leftestnewone1 = document.getElementById("leftestnewone1");

fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    cardInformation(data.results[0]);
    cardInformation(data.results[1]);
    cardInformation(data.results[2]);

  })

//form
const form = document.querySelector(".form");
console.log(form);
const mapinput = document.querySelector(".mapinput");
console.log(mapinput.value);
const selectinput = document.querySelector(".selectinput");
const map2input = document.querySelector(".map2input");
const mapbtn = document.querySelector(".mapbtn");
let arr = [];
mapbtn.addEventListener("click", (e) => {
  if (JSON.parse(localStorage.getItem("arr")) !== null) {
    arr = JSON.parse(localStorage.getItem("arr"));
  }
  let obj = {
    mapinput: "",
    selectinput: "",
    map2input: "",
  }
  obj.mapinput = mapinput.value;
  obj.selectinput = selectinput.value;
  obj.map2input = map2input.value;
  arr.push(obj);

  mapinput.value = "";
  localStorage.setItem("arr", JSON.stringify(arr));
  e.preventDefault();
})