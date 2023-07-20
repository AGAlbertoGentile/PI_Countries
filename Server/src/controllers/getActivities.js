
// Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

const {Activity, Country} = require("../db");

const getActivities = async (req, res) => {
    try{
        let allActivities = await Activity.findAll({include:[Country]});
        console.log('get',allActivities)
        let formattedActivities = [];

        if(allActivities.length === 0) console.log('No activity created in db');
        
        else {
            formattedActivities = allActivities?.map((activity)=> {
                const countries = activity.Countries.map((country)=> country.id)
                return {
                    id: activity.id,
                    name: activity.name,
                    difficulty: activity.difficulty,
                    duration: activity.duration,
                    season: activity.season,
                    countries: countries
                }
            })
        };

        res.status(200).json(formattedActivities);
    }catch(error){
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    getActivities,
}