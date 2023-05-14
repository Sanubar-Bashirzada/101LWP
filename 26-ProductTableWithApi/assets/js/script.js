const table = document.querySelector(".table")
var rows = table.getElementsByTagName("tr");
var columns = table.getElementsByTagName("th");
fetch("https://northwind.vercel.app/api/customers")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    data.forEach((item) => {
    let tr = document.createElement("tr");
    let companyName = document.createElement("td");
    let contactName = document.createElement("td");
    let city = document.createElement("td");
    let country = document.createElement("td");
    let phone = document.createElement("td");
    companyName.innerText = item.companyName;
    contactName.innerText = item.contactName;
    city.innerText = item.address.city;
    country.innerText = item.address.country;
    phone.innerText = item.address.phone;
    table.appendChild(tr);
    tr.append(companyName, contactName, city, country, phone);
    const info = document.createElement("button");
    info.style.cssText=`
    margin-left:-80px;
    margin-top:7px;
    width:60px;
    border-radius:10px;
    border:1px solid red`
    info.innerText = "info";
    tr.appendChild(info);
    info.addEventListener("click", function () {
        
       

    })
});
});




// fetch("https://northwind.vercel.app/api/customers")
// .then((res) => res.json())
// .then((elem) => {
//     function cardInformation(elem) {
//         const topone = document.createElement("div");
//         const ptop = document.createElement("p");
//         const ptop1 = document.createElement("p");
//         const ptop2 = document.createElement("p");
        
      
       
//         ptop.innerText = item.companyName;
//         ptop1.innerText = item.contactName;
//         ptop2.innerText = item.address.city;
       
       
//         topone.appendChild(ptop);
//         topone.appendChild(ptop1);
//         topone.appendChild(ptop2);
       
      
       
       
//       };
      
   
//     })



info.addEventListener("click", function() {
    // Kart yaradılır və body-ə əlavə edilir
    
    var card = document.createElement("div");
    card.classList.add("card");
    document.body.appendChild(card);
    
    // Səhifənin üstündəki başlıq, kartın başlığına əlavə edilir
    var title = document.createElement("h2");
    title.innerText = document.title;
    card.appendChild(title);
    
    // Cədvəldəki məlumatlar, kartın içindəki bir table-a əlavə edilir
    var cardTable = document.createElement("table");
    cardTable.classList.add("card-table");
    card.appendChild(cardTable);
    
    // Cədvəldəki sütunlar, kartın table-nin başlıqları kimi əlavə edilir
    var headerRow = document.createElement("tr");
    for (var i = 0; i < columns.length; i++) {
      var headerCell = document.createElement("th");
      headerCell.innerText = columns[i].innerText;
      headerRow.appendChild(headerCell);
    }
    cardTable.appendChild(headerRow);
    
    // Cədvəldəki sətirlər, kartın table-nin sətirləri kimi əlavə edilir
    for (var i = 0; i < rows.length; i++) {
      var dataRow = document.createElement("tr");
      var cells = rows[i].getElementsByTagName("td");
      for (var j = 0; j < cells.length; j++) {
        var dataCell = document.createElement("td");
        dataCell.innerText = cells[j].innerText;
        dataRow.appendChild(dataCell);
      }
      cardTable.appendChild(dataRow);
    }
  });
 
  
  
  
  
  
  
  