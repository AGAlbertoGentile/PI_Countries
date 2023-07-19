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
        // const output = await Country.findByPk(country.id, {include: [Activity]});
        
        // const associatedActivities = output.Activities.map((activity)=>{ return activity.name})

        // const finalCountry = {
        //     id: output.id,
        //     name: output.name,
        //     flags: output.flags,
        //     continents: output.continents,
        //     capital: output.capital,
        //     region: output.region,
        //     subRegion: output.subRegion,
        //     population: output.population,
        //     maps: output.maps,
        //     activities: associatedActivities,
        // }
        response = await getCountryByName(name);
        return res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
}

module.exports = {
    getCountriesHandler,
}