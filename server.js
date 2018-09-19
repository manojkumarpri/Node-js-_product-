const express = require('express');
var cors = require('cors')
var mongo = require('mongodb');
const bodyParser = require('body-parser');

// create express app
const app = express();
app.use(cors());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database Mlab
const dbConfig = 'mongodb://admin:admin1@ds159772.mlab.com:59772/productdetails';
let mongoDB = process.env.MONGODB_URI || dbConfig ;
const mongoose = require('mongoose');
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error',console.error.bind(console ,'MongoDB connection error:'));

// Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...');
//     process.exit();
// });


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to product  application. buy quickly. Organize and keep track of all your purchases."});
});

//For specifying routes 
require('./app/routes/product.routes.js')(app);
require('./app/routes/shop.routes.js')(app);
require('./app/routes/order.routes.js')(app);
require('./app/routes/user.routes.js')(app);
// listen for requests
app.listen(3004, () => {
    console.log("Server is listening on port 3000");
});