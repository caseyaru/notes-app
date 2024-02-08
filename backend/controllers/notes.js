const Note = require('../models/note');

const { OK, CREATED } = require('../utils/constants');
const NotFound = require('../errors/NotFound');
const NotAllowed = require('../errors/NotAllowed');

const createNote = (req, res, next) => {
  Note.create({ owner: req.user._id, ...req.body })
    .then((note) => { res.status(CREATED).send(note); })
    .catch(next);
};

const getNotes = (req, res, next) => {
  const owner = req.user._id;
  Note.find({ owner })
    .then((notes) => { res.status(OK).send(notes); })
    .catch(next);
};

const deleteNote = (req, res, next) => {
  Note.findById(req.params.movieId)
    .orFail(new NotFound('Данные не найдены'))
    .then((note) => {
      if (note.owner.toString() === req.user._id) {
        note.deleteOne(note)
          .then((notes) => { res.status(OK).send(notes); })
          .catch(next);
      } else {
        return next(new NotAllowed('Недостаточно прав для удаления'));
      }
    })
    .catch(next);
};

module.exports = { createNote, getNotes, deleteNote };
