const express =require("express")
const mongoose =require("mongoose");
require("dotenv").config();
require("./models/movies.model");
const addMovie = require("./controllers/addMovie");
const getAllMovies = require("./controllers/getAllMovies"); 
const getSingleMovie = require("./controllers/getSingleMovie");
const { updateMany } = require("./models/movies.model");
const updateMovie = require("./controllers/editMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");
const app = express();
app.use(express.json());

// Connection MongoDB using Mongoose  
mongoose.connect(process.env.mongo_connection,{}).then(()=>{
    console.log("Connection to MongoDB Succesful!")
}).catch(()=>{
    console.log("Connection to MongoDB Failed!")
})

// Routes...
app.post("/api/movies",addMovie);
app.get("/api/movies",getAllMovies);
app.get("/api/movies/:movie_id",getSingleMovie);
app.patch("/api/movies",editMovie);
app.delete("/api/movies/:movie_id",deleteMovie);

// Server Listening
app.listen(8000,()=>{
    console.log("Server is Working Successfully!")
})