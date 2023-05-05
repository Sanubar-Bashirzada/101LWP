

const table = document.querySelector(".table");



fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {

        data.forEach((element,i) => {
        let tr = document.createElement('tr');
        let number = document.createElement('td');
        let name = document.createElement('td');
        let capital = document.createElement('td');
        let population = document.createElement('td');
        let flag = document.createElement('td');
        let img =document.createElement('img');
        img.setAttribute("src",element.flags.png);
        flag.append(img);
       



        number.innerHTML = i;
        name.innerHTML =element.name.common;
        capital.innerHTML = element.capital;
        population.innerHTML = element.population;
        tr.append(number, name, capital ,population, flag);
        table.appendChild(tr);


        const btn3=document.createElement("button")

        btn3.innerHTML="Delete"
        tr.appendChild(btn3)
        
        btn3.style.cssText= 
         `
         width:60px;
         position: absolute;
         right:10px;
         margin-top:7px;
        
         `

         btn3.addEventListener("click",function(){
                tr.remove()
                })
        
const btn4=document.createElement("button")

btn4.innerHTML="Edit"
tr.appendChild(btn4)

btn4.style.cssText= 
 `
 width:60px;
 position: absolute;
 right:80px;
 margin-top:7px;


 `
 


    })
})



// btn3.style.cssText= 
// `
// width:100px;




// `

// btn3.addEventListener("click",function(){
//     flag.remove()
//     })