let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function(){
    let countries = JSON.parse(xhr.responseText);
    let asianCountries=countries.filter(countries => countries.region === 'Asia');
    asianCountries.forEach(countries =>{
        console.log(countries.name.common);
    });
    }