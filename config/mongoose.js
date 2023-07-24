// const { Console } = require('console');
const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        const mongoosedb = process.env.MONGODB_URI || 'mongodb://localhost/habit_tracker';
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(mongoosedb,options);
        console.log("Mongo DB Connected!")
    } catch (error) {
        console.error('MongoDB connection error', error);
    }
};

module.exports = connectDB;
