const { model, default: mongoose } = require("mongoose")

const getAllMovies = async (req,res)=>{

    const movies_model =mongoose.model("movies");
    try{

        // There is A Logic To Retireve The Movie By ID
        const movieData = await movies_model.find({
            _id:req.params.movie_id
        });
        
        res.status(200).json({
            status:"success",
            data:movieData
        })
    
    }catch(e){
        res.status(400).json({
            status:"success",
            message:e.message
        });
        return;
    }
    
}
module.exports = getAllMovies;