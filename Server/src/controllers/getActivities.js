
// Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

const getActivities = async (req, res) => {
    try{
        let allActivities = [];
        // const allActivities = 
        const {id, name, difficulty, duration, season} = req.body;
        console.log(id, name, difficulty, duration, season)
        res.status(200).json(data);
    }catch(error){
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    getActivities,
}