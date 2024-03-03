function authenticate(req, res, next) {
    if (req.session.userID) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }
  
  module.exports = authenticate;