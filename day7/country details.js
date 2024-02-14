let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function(){
    let countries = JSON.parse(xhr.responseText);
    countries.forEach(countries =>{
        let name= countries.name.common;
        let capital=countries.capital? countries.capital[0] : "N/A";
        let flag=countries.flags.svg;
        console.log(`Name: ${name},Capital: ${capital},Flag: ${flag}`);
    });
    }