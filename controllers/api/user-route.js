// imports packages and files
const router = require("express").Router();
const { User } = require("../../models");
const { withAuth, isAuthenticated } = require("../../utils/auth");

// CREATE a new user
router.post("/", async (req, res) => {
    try {
        // wait for user to input and create new user info
        const dbUserInfo = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserInfo.id;
            req.session.name = dbUserInfo.name;
            req.session.user = dbUserInfo;

            res.status(200).json(dbUserInfo);
        });

        // catches and displays any errors
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        // finds a user that matches email entered and stores into variable
        const dbUserInfo = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        // if there is no matching email, display an error message
        if (!dbUserInfo) {
            res.status(400);
            res.json({ message: "Incorrect email or password. Please try again!" });
            return;
        }

        const validateUserPassword = await dbUserInfo.checkPassword(req.body.password);

        // if the password is incorrect, display error message
        if (!validateUserPassword) {
            res.status(400);
            res.json({ message: "Incorrect email or password. Please try again!" });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserInfo.id;
            req.session.name = dbUserInfo.name;
            req.session.user = dbUserInfo;

            console.log("File: user-routes.js ~ line 56 ~ req.session.save ~ req.session.cookie", req.session.cookie);

            res.status(200);
            res.json({ user: dbUserInfo, message: "Nice! You are logged in." })
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// LOGOUT
router.post("/logout", withAuth, isAuthenticated, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;