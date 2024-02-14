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
//---------------------------------------
output:
Turkmenistan
Timor-Leste
Azerbaijan
Vietnam
Afghanistan
Kuwait
Kyrgyzstan
Armenia
Tajikistan
Brunei
Pakistan
Bangladesh
China
Maldives
Malaysia
Lebanon
Mongolia
Nepal
Taiwan
Bhutan
Cambodia
Georgia
Israel
Singapore
United Arab Emirates
Uzbekistan
Saudi Arabia
Japan
Syria
Iran
South Korea
Philippines
Macau
North Korea
Iraq
Palestine
Turkey
Kazakhstan
Qatar
Jordan
Myanmar
Thailand
Bahrain
Laos
India
Yemen
Oman
Indonesia
Sri Lanka
Hong Kong
