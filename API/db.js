const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://avigyatavi:4agWUJqf9BUnze1D@cluster0.y7q4d2x.mongodb.net/Daily-foody?retryWrites=true&w=majority'
const mongoConnect=async()=>{
    try {
        await mongoose.connect(dbURL)
        //to connect with monggose db
        console.log("connected")
        const fetched_data = await mongoose.connection.db.collection("food-items")
        //fetching data in collection
        
        console.log("fetched_data")
        const fetched_array = await fetched_data.find({}).toArray()
        //converting fetched data in array
        
        console.log(fetched_array)
        
    } catch (error) {
        console.log(error)
    }
   
    }
        



module.exports = mongoConnect ;