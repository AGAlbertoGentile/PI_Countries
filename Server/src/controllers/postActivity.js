// Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno)

const { Activity } = require('../db');

const postActivity = async (req, res) => {
    try{
        const activity = req.body;

        await Activity.bulkCreate(activity);
        res.status(200).json('Te amo nico');
    }catch(error){
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    postActivity,
}