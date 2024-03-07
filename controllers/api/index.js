const router = require('express').Router();
const userRoutes = require('./user-route');
const petRoutes = require ('./petrecord-route');
const ownerRoutes = require('./ownerprofile-route');

router.use('/user', userRoutes);
router.use('/petdashboard', petRoutes);
router.use('/ownerdashboard', ownerRoutes);

module.exports = router;