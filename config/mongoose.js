// // const { Console } = require('console');
// const mongoose = require('mongoose');

// const connectDB = async() =>{
//     try {
//         const mongoosedb = process.env.MONGODB_URI || 'mongodb://localhost/habit_tracker';
//         const options = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         };
//         await mongoose.connect(mongoosedb,options);
//         console.log("Mongo DB Connected!")
//     } catch (error) {
//         console.error('MongoDB connection error', error);
//     }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');
// connecting to mongoose
mongoose.connect('mongodb://localhost/habit_tracker_development');
// mongoose database connection
const connectDB = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

db.once('open',function(){
    console.log('Connected to Database :: MondoDB');
});

module.exports=connectDB;
