const { Router } = require('express');
const { getCountryById } = require('../controllers/getCountryById');
const { getCountriesHandler } =require('../handler/countriesHandler')

const routerCountries = Router();


routerCountries.get("/",getCountriesHandler); 

routerCountries.get("/:idPais",getCountryById);


module.exports = {
    routerCountries,
}
