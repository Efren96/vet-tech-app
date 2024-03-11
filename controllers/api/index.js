const router = require('express').Router();

// imports the routes to make modular
const userRoutes = require('./user-route');
const petRoutes = require('./petrecord-route');
const ownerRoutes = require('./ownerprofile-route');

// when a request is made to the this will direct user to correct page
router.use('/user', userRoutes);
router.use('/petdashboard', petRoutes);
router.use('/ownerdashboard', ownerRoutes);

module.exports = router;