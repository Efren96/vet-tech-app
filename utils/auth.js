const withAuth = (req, res, next) => {
  // if user not logged in, redirect to the login page

  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // if user is logged in, execute route function that will allow them access to page
    // call next() if user is authenticated
    next();
  }
};

const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    // user is authenticated, proceed to the next middleware
    return next();
  } else {
    // user is not authenticated, redirect to the login page
    res.redirect('/login');
  }
};

module.exports = { withAuth, isAuthenticated };