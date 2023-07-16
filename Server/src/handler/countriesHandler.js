//En este handler administramos que ruta vamos a utilizar en base a si recibe algo por query o no.
const { getCountries} = require('../controllers/getCountries');
const { getCountryByName } = require('../controllers/getCountryByName');


const getCountriesHandler = async(req, res) => {
    try {
        const {name} = req.query;
        let response = [];
        if(!name) {
            response = await getCountries();
            return res.status(200).json(response);
        };

        response = await getCountryByName(name);
        return res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
}

module.exports = {
    getCountriesHandler,
}