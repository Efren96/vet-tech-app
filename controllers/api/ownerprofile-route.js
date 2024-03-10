const router = require('express').Router();
const { Owner, Pet } = require('../../models');
const sequelize = require('../../config/connection');
const { withAuth, isAuthenticated } = require("../../utils/auth");

// gets all owners
router.get('/', withAuth, isAuthenticated, (req, res) => {
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
router.get('/:id', withAuth, isAuthenticated, async (req, res) => {
    try {
        const dbOwnerData = await Owner.findByPk(req.params.id, {
            include: [
                {
                    model: Pet,
                    attributes: [
                        'id',
                        "firstName",
                        "owner_id"
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
router.post('/', withAuth, isAuthenticated, (req, res) => {
    Owner.create({
        firstName: req.body.owner_firstName,
        lastName: req.body.owner_lastName,
        age: req.body.age,
        phoneNumber: req.body.phone_number,
        homeAddress: req.body.home_address,
    })
        .then(dbOwnerData => res.json(dbOwnerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// updates owner
router.put('/:id', withAuth, isAuthenticated, (req, res) => {
    Owner.update({
        fisrtName: req.body.owner_firstName,
        lastName: req.body.owner_lastName,
        age: req.body.age,
        phoneNumber: req.body.phone_number,
        homeAddress: req.body.home_address,
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
router.delete('/:id', withAuth, isAuthenticated, (req, res) => {
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