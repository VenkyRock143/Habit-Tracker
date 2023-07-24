
const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        const mongoosedb =process.env.MONGODB_URL || 'mongodb://localhost:27017/habit_tracker';
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            family: 4
        };
        await mongoose.connect(mongoosedb,options);
        console.log("Mongo DB Connected!")
    } catch (error) {
        console.error('MongoDB connection error', error);
    }
};

module.exports = connectDB;

