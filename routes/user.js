// routes/user.js - user router
// import packages
const express = require('express');
const passport = require('passport');
// import controller
const controller = require('../controllers/user');
// router instance
const router = express.Router();
// API endpoints
router
  .route('/api/users')
  .get(controller.all)
  .post(controller.create);

// router
//   .route('/api/users/me')
//   .get(passport.authenticate('jwt', { session: false }), controller.me);
//
//
router
  .route('/api/users/login')
  .post(passport.authenticate('local', { session: false }), controller.login);
//
// router
//   .route('/api/users/:id')
//   .get(
//     passport.authenticate('jwt', { session: false }),
//     auth.checkIsAdmin,
//     controller.one)router
//   .delete(
//     passport.authenticate('jwt', { session: false }),
//     auth.checkIsAdmin,
//     controller.delete)
//   .put(
//     passport.authenticate('jwt', { session: false }),
//     auth.checkIsAdmin,
//     controller.update);
// export
module.exports = router;
