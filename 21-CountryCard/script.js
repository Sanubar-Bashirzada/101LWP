fetch("https://restcountries.com/v3.1/name/azerbaijan")
    .then(res => res.json())
    .then(data => {

        const qite1 = document.getElementById("qite1")
        qite1.innerHTML = "Continent:" + data[0].region;

        const ad1 = document.getElementById("ad1")
        ad1.innerHTML = "Common:" + data[0].name.common;

        const valyuta1 = document.getElementById("valyuta1")
        valyuta1.innerHTML = "Currency:" + data[0].currencies.AZN.name;

        const seriya1 = document.getElementById("seriya1")
        seriya1.innerHTML = "Seria:" + data[0].car.signs;

        const ehali1 = document.getElementById("ehali1")
        ehali1.innerHTML = "Population:" + data[0].population;

        const paytaxt1 = document.getElementById("paytaxt1")
        paytaxt1.innerHTML = "Capital:" + data[0].capital[0];

       
        const num1 = document.getElementById("num1")
        num1.innerHTML = "Number:" + data[0].idd.root+ data[0].idd.suffixes;

    })
   
    fetch("https://restcountries.com/v3.1/name/italy")
    .then(res => res.json())
    .then(data => {

        const qite3 = document.getElementById("qite3")
        qite3.innerHTML = "Continent:" + data[0].region;

        const ad3 = document.getElementById("ad3")
        ad3.innerHTML = "Common:" + data[0].name.common;

        const valyuta3 = document.getElementById("valyuta3")
        valyuta3.innerHTML = "Currency:" + data[0].currencies.EUR.name;

        const seriya3 = document.getElementById("seriya3")
        seriya3.innerHTML = "Seria:" + data[0].car.signs;

        const ehali3 = document.getElementById("ehali3")
        ehali3.innerHTML = "Population:" + data[0].population;

        const paytaxt3 = document.getElementById("paytaxt3")
        paytaxt3.innerHTML = "Capital:" + data[0].capital[0];

       
        const num3 = document.getElementById("num3")
        num3.innerHTML = "Number:" + data[0].idd.root+ data[0].idd.suffixes;

    })
    fetch("https://restcountries.com/v3.1/name/germany")
    .then(res => res.json())
    .then(data => {

        const qite2 = document.getElementById("qite2")
        qite2.innerHTML = "Continent:" + data[0].region;

        const ad2 = document.getElementById("ad2")
        ad2.innerHTML = "Common:" + data[0].name.common;

        const valyuta2 = document.getElementById("valyuta2")
        valyuta2.innerHTML = "Currency:" + data[0].currencies.EUR.name;

        const seriya2 = document.getElementById("seriya2")
        seriya2.innerHTML = "Seria:" + data[0].car.signs;

        const ehali2 = document.getElementById("ehali2")
        ehali2.innerHTML = "Population:" + data[0].population;

        const paytaxt2 = document.getElementById("paytaxt2")
        paytaxt2.innerHTML = "Capital:" + data[0].capital[0];

       
        const num2 = document.getElementById("num2")
        num2.innerHTML = "Number:" + data[0].idd.root+ data[0].idd.suffixes;

    })
    fetch("https://restcountries.com/v3.1/name/spain")
    .then(res => res.json())
    .then(data => {

        const qite4 = document.getElementById("qite4")
        qite4.innerHTML = "Continent:" + data[0].region;

        const ad4 = document.getElementById("ad4")
        ad4.innerHTML = "Common:" + data[0].name.common;

        const valyuta4 = document.getElementById("valyuta4")
        valyuta4.innerHTML = "Currency:" + data[0].currencies.EUR.name;

        const seriya4 = document.getElementById("seriya4")
        seriya4.innerHTML = "Seria:" + data[0].car.signs;

        const ehali4 = document.getElementById("ehali4")
        ehali4.innerHTML = "Population:" + data[0].population;

        const paytaxt4 = document.getElementById("paytaxt4")
        paytaxt4.innerHTML = "Capital:" + data[0].capital[0];

       
        const num4 = document.getElementById("num4")
        num4.innerHTML = "Number:" + data[0].idd.root+ data[0].idd.suffixes;

    })