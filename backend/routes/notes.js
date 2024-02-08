const router = require('express').Router();
const { errors } = require('celebrate');

const { createNote, getNotes, deleteNote } = require('../controllers/notes');

router.post('/', createNote);
router.get('/', getNotes);
router.delete('/:movieId', deleteNote);

router.use(errors());

module.exports = router;
