const { Router } = require('express');
const { getCountries} = require('../controllers/getCountries');
const { getCountryByName } = require('../controllers/getCountryByName');
const { getCountryById } = require('../controllers/getCountryById');

const routerCountries = Router();


// routerCountries.get("/",getCountries);

routerCountries.get("/:idPais",getCountryById);

routerCountries.get("/",getCountryByName);

module.exports = {
    routerCountries,
}
