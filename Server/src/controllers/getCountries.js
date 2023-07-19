// Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
const { Country, Activity } = require('../db');

//Este controlador llama a todo lo que esta en mi db, ya completada por mi seeder.

const getCountries = async () => {
    allCountries = await Country.findAll({include: {model: Activity}})
    if(allCountries.length > 0) return allCountries;
    throw Error ('No countries found in database');
};

module.exports = {
    getCountries,
}
