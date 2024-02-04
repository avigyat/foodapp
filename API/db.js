const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://avigyatavi:4agWUJqf9BUnze1D@cluster0.y7q4d2x.mongodb.net/Daily-foody?retryWrites=true&w=majority'
const mongoConnect = async () => {
    try {
        await mongoose.connect(dbURL)
        //to connect with monggose db
        console.log("connected")
        const foodItems = await mongoose.connection.db.collection("food-items")
        const foodItems_array =await foodItems.find({}).toArray()
        if (!foodItems_array) { console.log("Could no retrive data for food items") } else {
            global.food_items = foodItems_array
            
        }

        //fetching data in collection

        const foodCategory = await mongoose.connection.db.collection("foodCategory")
        const foodCategory_array = await foodCategory.find({}).toArray();
        if (!foodCategory_array) { console.log("Could no retrive data for food category") } else {
            global.food_category = foodCategory_array
            
        }

        //converting fetched data in array

        console.log('fetch passed')
    } catch (error) {
        console.log("Problem while connecting to db", error)
    }

}




module.exports = mongoConnect;