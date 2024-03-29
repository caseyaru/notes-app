const router = require('express').Router();

const { createUser, login, signout } = require('../controllers/users');
const auth = require('../middlewares/auth');
const users = require('./users');
const notes = require('./notes');

const { celebrateSignUp, celebrateSignIn } = require('../middlewares/validation');
const NotFound = require('../errors/NotFound');

router.post('/signup', celebrateSignUp, createUser);
router.post('/signin', celebrateSignIn, login);
router.get('/signout', auth, signout);

router.use('/users', auth, users);
router.use('/notes', auth, notes);

router.use(
  '*',
  auth,
  (req, res, next) => {
    next(new NotFound('Маршрут не найден'));
  },
);

module.exports = router;
