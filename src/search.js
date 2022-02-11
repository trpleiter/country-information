import axios from "axios";

const countryInfoElement = document.getElementById('information-country');

async function getSpecificCountryInfo() {
    try {
        const resultCountryInfo = await axios.get('https://restcountries.com/v2/all');
        console.log(resultCountryInfo.data[157])
        for (let i = 0; i < resultCountryInfo.data.length; i++){
            const { flag, name, subregion, population, capital, demonym } = resultCountryInfo.data[i];
            console.log(resultCountryInfo.data[i]);
        }

        resultCountryInfo.data.map((countryInfo) => {
            countryInfoElement.innerHTML +=
                `<div class="country-info">
                 <li><img src="${countryInfo.flag}"</img> ${countryInfo.name}</li>
                 <li>${countryInfo.name} is situated ${countryInfo.subregion}. It has a population of 
                     ${countryInfo.population} people. The capital is ${countryInfo.capital} and you can pay with 
                        . They speak ${countryInfo.demonym}.
                       </li>
                 </div>`
        })
        }

    catch (e) {
        console.error(e);
    }
}

getSpecificCountryInfo();

//filter methodes?
//currencies nog toevoegen