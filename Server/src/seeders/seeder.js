const axios = require("axios");
const { Country } = require('../db');

const URL = 'http://localhost:5000/countries';

const fillDataBase = async () =>{
    try {
        allCountries = await Country.findAll()
        if(allCountries.length === 0){
            const { data } = await axios(URL);
        
            let countries = data.map((country) => {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flags: country.flags.png,
                    continents: country.continents[0],
                    capital: country.capital ? country.capital[0] : "No capital",
                    region: country.region,
                    subRegion: country.subregion || "No subregion",
                    area: country.area,
                    maps: country.maps.googleMaps,
                    population: country.population,
                }
            });
            // Crea una instancia de Country para cada uno.
            await Country.bulkCreate(countries);
            return 'Database successfully filled';
        }
        return 'Database already filled';
    } catch (error) {
        throw Error (error.message)
    }
};

module.exports = {
    fillDataBase,
}