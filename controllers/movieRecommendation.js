const movieRecommendation = (req,res) =>{
    res.status(200).json({
        status:"Great!",
        message:"Hello from Recommendation Section!"
    })
    
}
module.exports = movieRecommendation;