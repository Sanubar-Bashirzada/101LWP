const nameform = document.getElementById("nameform")
const surnameform = document.getElementById("surnameform")
const ageform = document.getElementById("ageform")
const btnform = document.getElementById("btnform")
const formone = document.getElementById("formone")
const btncls=document.getElementById("btncls")


let arr = []


formone.addEventListener("submit", function (e) {

    let obj = {
        name: "",
        surname: "",
        age: "",
       

    };
    obj.name = nameform.value;
    obj.surname = surnameform.value;
    obj.age = ageform.value;

    console.log(obj);
    arr.push(obj);
    console.log(arr);


    localStorage.setItem("arr",JSON.stringify( arr))
    console.log(JSON.parse(localStorage.getItem("arr", arr)) )
    e.preventDefault()
})

// btncls.addEventListener("click" ,function () {
//     let searchedName = document.getElementById("searchInput").value;
//     let storedName = localStorage.getItem("name");
  
//     if (storedName && storedName === searchedName) {
//       alert("Bu ad var");
//     } else {
//       alert("Bu ad yoxdur");
//     }
//   }

// )


