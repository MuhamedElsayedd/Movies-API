## Simple Movies API

A straightforward Node.js and MongoDB-based Movies API designed for basic CRUD operations: create, read, update, and delete movie records.  
This project is perfect for practicing RESTful API development and working with databases using Mongoose.

---

## Features

- Create a new movie  
- Get all movies or a specific one by ID  
- Update movie details  
- Delete a movie  

---

## Usage

- Clone the repository  
- Run `npm install` to install dependencies  
- Set up your `.env` file with your MongoDB connection string  
- Start the server using `npm run dev`  

Once running, you can use Postman or any REST client to interact with the API.

---

## Example Request (POST)

```json
{
  "movie_name": "Sinners",
  "info": "It's A Mix between A bluse Songs and Dramatic scences",
  "rating": 10,
}
