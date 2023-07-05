// const { Op } = require("sequelize");
// Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.

const getCountryByName = async (req, res) => {
    try{
        const {name} = req.query;

        if(name){
            const foundCountry = await Country.findOne({where:{name: name}});
            return res.status(200).json(foundCountry);
        }
        res.status(200).json(foundCountry);
    }catch(error){
        res.status(400).json({erros: error.message})
    }
}

module.exports = {
    getCountryByName,
}