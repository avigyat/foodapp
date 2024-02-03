const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://avigyatavi:4agWUJqf9BUnze1D@cluster0.y7q4d2x.mongodb.net/Daily-foody?retryWrites=true&w=majority'
const mongoConnect=async()=>{
    try {
        await mongoose.connect(dbURL)
        //to connect with monggose db
        console.log("connected")
        const fetched_data = await mongoose.connection.db.collection("food-items")
        //fetching data in collection
        
        
        const fetched_array = await fetched_data.find({}).toArray()
        //converting fetched data in array
        
       
        
    } catch (error) {
        console.log("Problem while connecting to db", error)
    }
   
    }
        



module.exports = mongoConnect ;