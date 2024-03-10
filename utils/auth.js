const withAuth = (req, res, next) => {
    // If user is not logged in, redirect to the login page

    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If user is logged in, execute route function that will allow them access to page
      // We call next() if the user is authenticated
      next();
    }
  };

const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        // User is authenticated, proceed to the next middleware
        return next();
    } else {
        // User is not authenticated, redirect to the login page
        res.redirect('/login');
    }
}
  
  module.exports = { withAuth, isAuthenticated };