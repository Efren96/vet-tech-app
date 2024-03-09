const router = require('express').Router();
const { Pet, Owner } = require('../../models');
const sequelize = require('../../config/connection');

// gets all pets
router.get('/', (req, res) => {
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
});

// gets pets by id
router.get('/:id', async (req, res) => {
    try {
      const dbPetData = await Pet.findByPk(req.params.id, {
        include: [
          {
            model: Owner,
            attributes: [
              'id',
              "firstName",
              "lastName"
            ],
          },
        ],
      });
  
      const pet = dbPetData.get({ plain: true });
      console.log(pet);
      res.render('petprofile', { pet, loggedIn: true });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// creates pet
router.post('/', (req, res) => {
    Pet.create({
        firstName: req.body.pet_firstName,
        lastName: req.body.pet_lastName,
        age: req.body.age,
        species: req.body.species,
        weight: req.body.weight,
        neutered: req.body.isNeutered,
        vaccinationNeeded: req.body.needsVaccines,
        owner_id: req.body.owner_id
    })
        .then(dbPetData => res.json(dbPetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// updates pet
router.put('/:id', (req, res) => {
    Pet.update({
        fisrtName: req.body.fisrtNameame,
        lastName: req.body.lastName,
        age: req.body.age,
        species: req.body.species,
        weight: req.body.weight,
        neutered: req.body.neutered,
        vaccinationNeeded: req.body.vaccinationNeeded,
        owner_id: req.session.owner_id,
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'Could not find pet with this id' });
            return;
        }
        res.json(dbPetData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// deletes pet
router.delete('/:id', (req, res) => {
    Pet.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'Could not find pet with this id' });
            return;
        }
        res.json(dbPetData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;