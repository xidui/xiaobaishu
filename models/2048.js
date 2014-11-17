/**
 * Created by apple on 14-11-11.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var G2048Schema = new Schema({
    score: { type: Number, default: 0 },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
});

mongoose.model('G2048', G2048Schema);