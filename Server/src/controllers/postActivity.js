// Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno)
const { Op } =require('sequelize');
const { Activity, Country } = require('../db');

const postActivity = async (req, res) => {
    try {
        const activity = req.body;
        
        const { name, difficulty, duration, season, countries } = activity
        // console.log(activity);
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });
        
        const countriesRegister = await Country.findAll({
            where:{
                id: {[Op.in]: countries}
            }
        })
        
        await newActivity.addCountries(countriesRegister);

        const output = await Activity.findByPk(newActivity.id, {include: [Country]});
        
        const associatedCountries = output.Countries.map((country)=>{ return country.id})
        
        const finalActivity = {
            id: output.id,
            name: output.name,
            difficulty: output.difficulty,
            duration: output.duration,
            season: output.season,
            countries: associatedCountries
        }
        console.log('1',finalActivity);
        res.status(200).json(finalActivity);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    postActivity,
}
