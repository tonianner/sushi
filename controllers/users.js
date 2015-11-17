var passport = require("passport");

// GET /signup
function getSignup(request, response) {
  response.render('/sushi/signup.ejs', { message: request.flash('signupMessage') });
}

// POST /signup
function postSignup(request, response) {
  var signupStrategy = passport.authenticate('local-signup', {
      successRedirect : '/sushi',
      failureRedirect : '/sushi/signup',
      failureFlash : true
  });
  return signupStrategy(request, response);
}

// GET /login
function getLogin(request, response) {
  response.render('/sushi/login.ejs', { message: request.flash('loginMessage') });
}

// POST /login
function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
      successRedirect : '/sushi',
      failureRedirect : '/sushi/login',
      failureFlash : true
  });
  return loginProperty(request, response);
}

// GET /logout
function getLogout(request, response) {
  request.logout();
  response.redirect('/sushi');
}

// Restricted page
// function secret(request, response){
//   response.render('secret.ejs');
// }

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout
  // secret: secret
};
