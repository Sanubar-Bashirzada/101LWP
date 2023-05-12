//navbar
const bar = document.querySelector(".bar");
const resp = document.querySelector(".resp");
const nav = document.querySelector("nav");
bar.addEventListener("click", function () {
  resp.classList.toggle("responsive")
  nav.classList.toggle("header_bg")
})


//card
function cardInformation(data) {
  const topone = document.createElement("div");
  const flxdiv = document.createElement("div");
  const flxdiv1 = document.createElement("div");
  const ptop = document.createElement("p");
  const ptop1 = document.createElement("p");
  const ptop2 = document.createElement("p");
  const imgclock = document.createElement("img");
  const ptop6 = document.createElement("p");
  const line = document.createElement("div");
  const ptop3 = document.createElement("p");
  const ptop4 = document.createElement("p");
  const ptop5 = document.createElement("p");
  imgclock.src = './assets/imgs/Shape.png'

  topone.classList.add('evenscard1')
  ptop.classList.add('evcardnumb');
  ptop1.classList.add('evcardp1');
  ptop2.classList.add('evcardp1');
  ptop3.classList.add('evcardp1');
  ptop6.classList.add('cardnow');
  ptop6.classList.add('marginphuman');
  ptop4.classList.add('digital');
  ptop5.classList.add('cardnow');
  flxdiv.classList.add("newdivflx");
  flxdiv1.classList.add("divclock");
  ptop1.classList.add('marginp');
  ptop2.classList.add('marginp');
  imgclock.classList.add('clockjs');
  line.classList.add('eventbox');
  line.classList.add('linejs');

  ptop.innerText = `3`
  ptop1.innerText = `${data.name}`
  ptop2.innerText = `${data.species}`
  ptop6.innerText = `${data.species}`
  ptop3.innerText = `${data.name}`
  ptop4.innerText = `${data.name}`
  ptop5.innerText = `${data.species}`

  topone.appendChild(ptop);
  topone.appendChild(ptop1);
  topone.appendChild(ptop2);
  topone.appendChild(ptop6);
  topone.appendChild(ptop3);
  topone.appendChild(ptop4);
  topone.appendChild(ptop5);
  topone.appendChild(imgclock);
  topone.appendChild(flxdiv);
  topone.appendChild(flxdiv1);
  topone.appendChild(line);
  flxdiv.appendChild(ptop1);
  flxdiv.appendChild(ptop2);
  flxdiv1.appendChild(ptop6);
  flxdiv1.appendChild(imgclock);

  evenscrd.appendChild(topone);


};


const evenscrd = document.getElementById("evenscrd");
fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {

    cardInformation(data.results[0]);
    cardInformation(data.results[1]);
    cardInformation(data.results[2]);

  })