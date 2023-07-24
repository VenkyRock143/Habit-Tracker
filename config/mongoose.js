
const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        const mongoosedb =mongosh "mongodb+srv://habit.qxvyvn6.mongodb.net/" --apiVersion 1 --username venkybalusani1
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        };
        await mongoose.connect(mongoosedb,options);
        console.log("Mongo DB Connected!")
    } catch (error) {
        console.error('MongoDB connection error', error);
    }
};

module.exports = connectDB;

