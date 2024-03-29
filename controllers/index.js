const router = require("express").Router();

// imports the routes to make modular
const apiRoutes = require('./api');
const homeRoutes = require('./home-route');

// when a request is made to the / or /api path, it will be directed to the index.js in the controllers folder
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;