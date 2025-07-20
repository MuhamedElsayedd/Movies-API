const mongoose = require("mongoose");

const editMovie = async (req,res)=>{
    const movies_model = mongoose.model("movies");
    const {movie_id,movie_name,info,rating,description} = req.body;

    try{
       if(!movie_id) throw "Movie Id is required!"
    }catch(e){
        res.status(400).json({
            status:"Error",
            message:e
        });
        return;
    }

    try{
       await movies_model.updateOne({
            _id:movie_id
        },
        {
            movie_name:movie_name,
            info:info,
            rating:rating,
            description:description
    
        },{
            runValidators:true
        });
    
        res.status(201).json({
            status : "success",
            message : "Movie Edited Successfuly!"
        });
        return;
    }
    catch(e){
        res.status(400).json({
            status:"Failed",
            message:"Something wrong Happend During Updated"
        })
    }
}

module.exports = editMovie;