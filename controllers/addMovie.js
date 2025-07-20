const mongoose =require("mongoose");

const addMovie = async (req, res) => {
  const{movie_name,info,rating,description}=req.body;
  const movies_model =mongoose.model("movies");

  // Validatinos..
  // Try and Catch in Validation
  try{
    if(!movie_name) throw"Movie's Name is Required!";
    if(!info)throw "Movie's Info is Required!";
    if(!rating)throw "Movie's Rating is Required!";
    if(rating<1||rating>10) throw "Movie Rating is Require between 1-10";
    
  }
  catch(e){
    res.status(400).json({
      status:400,
      message:e
     })
    return;
  }

  try{
    await movies_model.create({
      movie_name:movie_name,
      info:info,
      rating:rating,
      description:description
    });

  }catch(e){
    res.status(400).json({
      status:400,
      message:e.message
     })
    return;
  }
 

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
    data:{
      movie_name : movie_name,
      info:info,
      rating:rating,
      description:description
    }
  });
};

module.exports = addMovie;