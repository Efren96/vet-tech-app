const router = require('express').Router();
const { Pet, Owner } = require('../models');

// homepage route
router.get('/', (req, res) => {
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