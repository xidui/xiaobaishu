var mongoose = require('mongoose');
var config = require('../config').config;

mongoose.connect(config.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

// models
require('./user');
require('./note');
require('./2048');

exports.User = mongoose.model('User');
exports.Note = mongoose.model('Note');
exports.G2048 = mongoose.model('G2048_2');