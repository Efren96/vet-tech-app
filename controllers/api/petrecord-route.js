const router = require('express').Router();
const { Pet } = require('../../models');
const sequelize = require('../../config/connection');
// const withAuth = require('../../utils/auth');

// gets all pets
router.get('/', (req, res) => {
    Pet.findAll({
        attributes: [],
    })
        .then(dbPetData => res.json(dbPetData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// gets pets by id
router.get('/:id', (req, res) => {
    Pet.findOne({
        where: {
            id: req.params.id
        },
        attributes: [],
        
    })
        .then(dbPetData => {
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

// creates pet
router.post('/', (req, res) => {
    Pet.create({
        fisrtName: req.body.fisrtNameame,
        lastName: req.body.lastName,
        age: req.body.age,
        species: req.body.species,
        weight: req.body.weight,
        neutered: req.body.neutered,
        vaccinationNeeded: req.body.vaccinationNeeded,
        owner_id: req.session.owner_id,
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