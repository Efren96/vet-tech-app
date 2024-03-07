const router = require('express').Router();
const { ownerProfile } = require('../../models');
const sequelize = require('../../config/connections');
const withAuth = require('../../utils/auth');

// gets all owners
router.get('/', (req, res) => {
    ownerProfile.findAll({
        attributes: [],
    })
        .then(dbOwnerData => res.json(dbOwnerData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// gets owner by id
router.get('/:id', (req, res) => {
    ownerProfile.findOne({
        where: {
            id: req.params.id
        },
        attributes: [],
        
    })
        .then(dbPetData => {
            if (!dbOwnerData) {
                res.status(404).json({ message: 'Could not find owner with this id' });
                return;
            }
            res.json(dbOwnerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// creates owner
router.post('/', withAuth, (req, res) => {
    ownerProfile.create({
        fisrtName: req.body.fisrtNameame,
        lastName: req.body.lastName,
        age: req.body.age,
        phoneNumber: req.body.phoneNumber,
        homeAddress: req.body.homeAddress,
        pet_id: req.session.pet_id,
    })
        .then(dbOwnerData => res.json(dbOwnerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// updates owner
router.put('/:id', withAuth, (req, res) => {
    ownerProfile.update({
        fisrtName: req.body.fisrtNameame,
        lastName: req.body.lastName,
        age: req.body.age,
        phoneNumber: req.body.phoneNumber,
        homeAddress: req.body.homeAddress,
        pet_id: req.session.pet_id,
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbOwnerData => {
        if (!dbOwnerData) {
            res.status(404).json({ message: 'Could not find owner with this id' });
            return;
        }
        res.json(dbOwnerData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// deletes owner
router.delete('/:id', withAuth, (req, res) => {
    ownerProfile.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbOwnerData => {
        if (!dbOwnerData) {
            res.status(404).json({ message: 'Could not find owner with this id' });
            return;
        }
        res.json(dbOwnerData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;