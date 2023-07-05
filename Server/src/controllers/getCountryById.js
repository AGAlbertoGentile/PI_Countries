const axios = require('axios');

// Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// El país es recibido por parámetro (ID de tres letras del país).
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.

const URL = 'http://localhost:5000/countries/';

const getCountryById = async (req, res) => {
    try{
        const {idPais} = req.params;
        console.log(idPais)

        const {data} =  await axios(URL)
        
        const foundData = data.find((country) => country.cca3 === idPais);

        // if(data.name){
        //     let country = {
        //         id: data.cca3,
        //         name: data.name,
        //         flagImage: data.flagImage,
        //         continent: data.continent,
        //         capital: data.capital,
        //         region: data.region,
        //         subRegion: data.subRegion,
        //         area: data.area,
        //         mapLocation: data.mapLocation,
        //         population: data.population,
        //     }
        // }
        // if(!country){
        //     res.status(400).send('No se encontro un pais con ese ID');
        // }
        return res.status(200).json(foundData)
    }catch(error){
        res.status(500).json({erros: error.message})
    }
}

module.exports = {
    getCountryById,
}
