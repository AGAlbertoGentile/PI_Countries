// Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.
const { Country, Activity } = require('../db');
const { Op } = require("sequelize");


const getCountryByName = async (req, res) => {
    try {
        const { name } = req.query;
        
        let searchCountry = await Country.findOne({
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
        if(!searchCountry) {
            return res.status(400).send('Not found');
        }
        res.status(200).json(searchCountry);

    } catch (error) {
        res.status(500).json({ erros: error.message })
    }
};

module.exports = {
    getCountryByName,
}