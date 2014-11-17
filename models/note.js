/**
 * Created by apple on 14-9-18.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var config = require('../config').config;

var NoteSchema = new Schema({
    content: { type: String },
    author_id: { type: ObjectId },
    reply_count: { type: Number, default: 0 },
    create_at: { type: Date, default: Date.now },
    last_reply_at: { type: Date, default: Date.now }
});

mongoose.model('Note', NoteSchema);