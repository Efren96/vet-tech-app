const router = require('express').Router();
const { Pet, Owner } = require('../models');
const { withAuth, isAuthenticated } = require("../utils/auth");

// homepage route
router.get('/', withAuth, isAuthenticated, (req, res) => {
  if (req.session.loggedIn) {
    Pet.findAll({
      attributes: [
          'id',
          'firstName',
          'lastName',
          'age',
          'species'
      ],
  })
  .then(dbPetData => {
      const pets = dbPetData.map((pet) => pet.get({ plain: true }));
      res.render("petdashboard", { pets, loggedIn: true });
  })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
    return;
  } 
  res.render('login');
});


// login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

module.exports = router;