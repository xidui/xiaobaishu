/**
 * Created by apple on 14-11-11.
 */
var models = require('../models');
var G2048 = models.G2048;

exports.newAndSave = function (score, callback) {
    var g2048 = new G2048();
    g2048.score = score;
    g2048.save(callback);
};

exports.getScoresByQuery = function (query, opt, callback) {
    G2048.find(query, callback);
};