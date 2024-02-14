let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function(){
    let countries = JSON.parse(xhr.responseText);
    let usDollarCountries=countries.filter(countries => countries.currencies && countries.currencies.USD);
    usDollarCountries.forEach(countries =>
        console.log(countries.name.common));
}
//---------------------
output:
Timor-Leste
American Samoa
El Salvador
Guam
Puerto Rico
Panama
British Virgin Islands
British Indian Ocean Territory
United States
Cambodia
Bahamas
United States Virgin Islands
Marshall Islands
United States Minor Outlying Islands
Northern Mariana Islands
Micronesia
Turks and Caicos Islands
Ecuador
Palau
Caribbean Netherlands
