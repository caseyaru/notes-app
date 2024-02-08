const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  // заголовок (необязательный)
  header: {
    type: String,
  },
  // содержимое
  data: {
    type: String,
    required: true,
  },
  // дата создания
  created: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('note', noteSchema);
