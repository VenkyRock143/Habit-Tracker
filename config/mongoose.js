// const { Console } = require('console');
const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        const mongoosedb = 'mongodb://localhost/habit_tracker';
        await mongoose.connect(mongoosedb,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongo DB Connected!")
    } catch (error) {
        console.error('MongoDB connection error', error);
    }
};

module.exports = connectDB;