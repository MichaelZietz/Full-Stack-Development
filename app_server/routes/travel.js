var express = require('express');
var router = express.Router();
var controller = require('../controllers/travel');

/* GET tavel page */
router.get('/', controller.travel);

module.exports = router;