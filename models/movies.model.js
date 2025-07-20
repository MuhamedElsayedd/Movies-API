const mongoose =require("mongoose");

const moviesSchema = new mongoose.Schema({
    movie_name:{
        type:String,
        required:[true , "Movie Name is Requires"]
    },
    info:{
        type:String,
    },
    rating:{
        type:Number,
    },
    description:{
        type:String,
    }
})

const movies_Model = mongoose.model("movies",moviesSchema);

module.exports =movies_Model; 