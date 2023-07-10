const { Country, Activity } = require('../db');


// Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// El país es recibido por parámetro (ID de tres letras del país).
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.


const getCountryById = async (req, res) => {
    try {
        const { idPais } = req.params;
        const country = await Country.findOne({ 
            where: { id: idPais },
            include: [{ 
                model: Activity,
                through:{attributes:[]}
            }]
         });

        if (!country) throw new Error("ID not found");
        return res.status(200).json(country)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

module.exports = {
    getCountryById,
}
