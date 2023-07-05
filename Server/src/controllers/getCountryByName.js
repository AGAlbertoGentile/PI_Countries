// Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.
const { Country, Activity } = require('../db');
const { Op } = require("sequelize");


const getCountryByName = async (req, res) => {
    try {
        const { name } = req.query;
        console.log(name);
        
        let searchCountry = await Country.findOne({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: { model: Activity }
        });
        console.log(searchCountry);
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