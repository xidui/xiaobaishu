var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../config').config;

var UserSchema = new Schema({
//  name: { type: String, index: true },
  loginname: { type: String, unique: true, index: true },
  email: { type: String, unique: true },
  pass: { type: String },

  notes_count: { type: Number, default: 0 },
  reply_count: { type: Number, default: 0 },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
});

mongoose.model('User', UserSchema);
