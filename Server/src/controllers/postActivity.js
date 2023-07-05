// Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno)

const postActivity = async (req, res) => {
    try{
        const response =  'funciono';
        res.status(200).json([response]);
    }catch(error){
        res.status(400).json({erros: error.message})
    }
}

module.exports = {
    postActivity,
}