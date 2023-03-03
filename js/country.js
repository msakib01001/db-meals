const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then (data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-countries')
    // console.log(countries)

    // for (const country of countries) {
    //     console.log(country)
    // }

    countries.forEach(country => {
        console.log()
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h4>Name: ${country.name.common}</h4>
            <h4>Capital: ${country.capital ? country.capital[0] : 'no Capital '}</h4>
            <button onclick="displayCountryDetail('${country.cca2}')">Details</button>
        `

        countriesContainer.appendChild(countryDiv)
    });
}

const displayCountryDetail = code => {
    const url = `https://restcountries.com/v2/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetail(data))
}


const showCountryDetail = country => {
    console.log(country)
    const detailContainer = document.getElementById('country-detail')
    detailContainer.innerHTML = `
        <h4>country: ${country.name}</h4>
        ${country.flags.svg}
    `
}

loadCountries()
    