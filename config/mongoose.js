
const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        // const mongoosedb = 'mongodb://localhost/habit_tracker'
        // const options = {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // };
        // await mongoose.connect(mongoosedb,options);
         await mongoose.connect('mongodb+srv://venkybalusani1:Rock4027@habit.z05oj4w.mongodb.net/?retryWrites=true&w=majority');
        console.log("Mongo DB Connected!")
    } catch (error) {
        console.error('MongoDB connection error', error);
    }
};

module.exports = connectDB;

