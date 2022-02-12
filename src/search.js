import axios from "axios";

const countryInfoElement = document.getElementById('information-country');
const searchbarElement = document.getElementById('searched-country');
const searchBar = document.getElementById('search-bar-container');

searchBar.addEventListener('submit', getSearchInput);

async function getSpecificCountryInfo(name) {
    try {
        const resultCountryInfo = await axios.get(`https://restcountries.com/v2/name/${name}`);
        let specificCountry = resultCountryInfo.data[0];

        countryInfoElement.innerHTML =
            `<div class="country-info">
                 <h3><img src="${specificCountry.flag}"</img> ${specificCountry.name}</h3>
                 <li>${specificCountry.name} is situated ${specificCountry.subregion}. It has a population of
                     ${specificCountry.population} people. The capital is ${specificCountry.capital} and you can pay 
                     with ${getCurrencies(specificCountry.currencies)}. They speak ${specificCountry.demonym}.
                       </li>
                 </div>`
    } catch (e) {
        console.error(e);
        countryInfoElement.innerHTML = '' +
            `<p>${name} does not exist, try again.</p>`;
    }
}

function getCurrencies(currencies) {
    if (currencies.length === 2) {
        return `and you can pay with ${currencies[0].name} and ${currencies[1].name}`
    } else {
        return `and you can pay with ${currencies[0].name}`
    }
}

function getSearchInput(e) {
    e.preventDefault();
    getSpecificCountryInfo(searchbarElement.value);
    searchBar.reset();
}