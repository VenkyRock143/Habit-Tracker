const express = require('express');
const app = express();
const port = 9000;
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./config/mongoose');
const bodyParser = require('body-parser');

//Middleware to take care of req,res of url that are encoded.
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(expressLayouts);

//making assets folder as default static folder for express
app.use(express.static('assets'));

//connecting mongo DB
connectDB();

//extract styles and scripts from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/', require('./routes'));

//setup view engine
app.set('view engine','ejs')
app.set('views','./views');

app.listen(port, function(err){
    if(err){
        console.log(`error in running server: ${err}`)
    }
    console.log(`Server is running succesfully on port: ${port}`)
})
