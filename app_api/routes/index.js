const express = require('express'); // Express app
const router = express.Router(); // Router logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define roue for our trips endpoint
router  
    .route('/trips')
    .get(tripsController.tripsList); // GET Method routes tripList

// GET method routes tripsFindByCode - requires parameter
router  
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode); // GET Method routes tripList

module.exports = router;