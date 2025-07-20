const { model, default: mongoose } = require("mongoose")

const getAllMovies = async (req,res)=>{

    const movies_model =mongoose.model("movies");
    const moviesData = await movies_model.find({});
    
    res.status(200).json({
        status:"Hello From Get All Movies Method",
        data:moviesData
    })

}
module.exports = getAllMovies