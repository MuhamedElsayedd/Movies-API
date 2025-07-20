const mongoose =require("mongoose");

const deleteMovie = async (req,res) =>{
    const movie_model = mongoose.model("movies");
    const movie_id =req.params.movie_id;

    try{
        await movie_model.deleteOne({
            _id:movie_id
        })
    
        res.status(201).json({
            status:201,
            message:"Movie Deleted Succussfuly!"
        });
        return;
    }
    catch(e){
        res.status(400).json({
            status:"Failed",
            message:"Something Wrong Happend!"
        })
    }
   
}

module.exports = deleteMovie;