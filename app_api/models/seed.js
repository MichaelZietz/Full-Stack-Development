//Bring in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from json file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./app_server/data/trips.json', 'utf8'));

// delete any existing recors, then insert seed data
const seeDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// Close the MongoDB connection and exit
seeDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});