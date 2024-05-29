
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async() =>{
    try {
         await mongoose.connect('mongodb+srv://venkybalusani1:Rock4027@habit.z05oj4w.mongodb.net/?retryWrites=true&w=majority');
        console.log("Mongo DB Connected!")
    } catch (error) {
        console.error('MongoDB connection error', error);
    }
};

module.exports = connectDB;

