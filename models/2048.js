/**
 * Created by apple on 14-11-11.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var G2048_2Schema = new Schema({
    score: { type: Number, default: 0 },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
});

mongoose.model('G2048_2', G2048_2Schema);