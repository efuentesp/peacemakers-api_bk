// Generated by CoffeeScript 1.6.3
var authorization, passport, schools;

passport = require("passport");

authorization = require("../auth/authorization");

schools = require('./schools');

module.exports = function(app) {
  var bearer;
  bearer = passport.authenticate('bearer', {
    session: false
  });
  app.get('/api/schools', bearer, authorization.restrictTo('schools', 'list'), schools.list);
  app.get('/api/schools/:id', schools.show);
  app.post('/api/schools', schools.create);
  app.put('/api/schools/:id', schools.update);
  return app["delete"]('/api/schools/:id', schools.destroy);
};
