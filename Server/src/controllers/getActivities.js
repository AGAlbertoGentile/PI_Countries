
// Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

const {Activity} = require("../db");

const getActivities = async (req, res) => {
    try{
        let allActivities = await Activity.findAll();
        if(allActivities.length === 0) throw Error ('No activity created in db');
        res.status(200).json(allActivities);
    }catch(error){
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    getActivities,
}