// Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.
const { Country, Activity } = require('../db');
const { Op } = require("sequelize");


const getCountryByName = async (name) => {
    try {

        let foundCountry = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%` // busco alguna coincidencia con el nombre ingresado.
                }
            },
            include: [{ 
                model: Activity,
                through:{attributes:[]} // le indico a mi tabla intermedia que no traiga informacion.
            }]
        });
        console.log('found', foundCountry)
        if(!foundCountry) {
            throw Error ('Not found');
        }
        return foundCountry;

    } catch (error) {
        throw Error (error.message)
    }
};

module.exports = {
    getCountryByName,
}