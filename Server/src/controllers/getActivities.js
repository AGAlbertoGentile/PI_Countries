
// Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

const getActivities = async (req, res) => {
    try{
        const response =  'funciono';
        res.status(200).json([response]);
    }catch(error){
        res.status(400).json({erros: error.message})
    }
}

module.exports = {
    getActivities,
}