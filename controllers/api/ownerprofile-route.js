const router = require('express').Router();
const { Owner, Pet } = require('../../models');
const sequelize = require('../../config/connection');

// gets all owners
router.get('/', (req, res) => {
    Owner.findAll({
        attributes: [
            'id',
            'firstName',
            'lastName',
            'phoneNumber'],
    })
        .then(dbOwnerData => {
            const owners = dbOwnerData.map((owner) => owner.get({ plain: true }));
            res.render("ownerdashboard", { owners, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// gets owner by id
router.get('/:id', async (req, res) => {
    try {
        const dbOwnerData = await Owner.findByPk(req.params.id, {
            include: [
                {
                    model: Pet,
                    attributes: [
                        'id',
                        "firstName",
                    ],
                },
            ],
        });

        const owner = dbOwnerData.get({ plain: true });
        console.log(owner);
        res.render('ownerprofile', { owner, loggedIn: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// creates owner
router.post('/', (req, res) => {
    Owner.create({
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
router.put('/:id', (req, res) => {
    Owner.update({
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
router.delete('/:id', (req, res) => {
    Owner.destroy({
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