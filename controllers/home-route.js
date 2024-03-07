const router = require('express').Router();

// homepage route
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
  });
    return;
  }
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