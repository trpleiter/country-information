import axios from "axios";

const infoCountriesElement = document.getElementById("information-countries");

async function getCountryInfo() {
    try {
        const resultCountryInfo = await axios.get('https://restcountries.com/v2/all');
        resultCountryInfo.data.sort((a, b) => {
            return a.population - b.population;
        })
        resultCountryInfo.data.map((countryInfo) => {
            infoCountriesElement.innerHTML +=
                `<div class="country-info">
                 <li class="${countryInfo.region}"><img src="${countryInfo.flag}"</img> ${countryInfo.name}</li>
                 <li>has a population of 
                     ${countryInfo.population} people</li>
                 </div>`
        })
    } catch (error) {
        console.error(error);
    }
}

getCountryInfo();

// Bonus opdracht met destructuring objects krijg ik nog niet werkend.


