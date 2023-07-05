// Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
const axios = require('axios');
const { Country } = require('../db');

const URL = 'http://localhost:5000/countries';

const getCountries = async (req, res) => {
    try{
        const {data} = await axios (URL);

        let countries = data.map((country) => {
            return {
                id: country.cca3,
                name: country.name.common,
                flags: country.flags.png,
                continents: country.continents[0],
                // capital: country.capital[0],
                region: country.region,
                // subRegion: country.subRegion,
                // area: country.area,
                mapLocation: country.mapLocation,
                population: country.population,
            }
        });
        await Country.bulkCreate(countries);
        res.status(200).json(countries);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getCountries,
}
