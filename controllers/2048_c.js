/**
 * Created by apple on 14-11-11.
 */
var G2048 = require('../proxy/2048_p');
var G2048Model = require('../models').G2048;

exports.getRatio = function (req, res, next) {
    var score = req.param('score')
    console.log(score);

    G2048.newAndSave(score, function(err){
        if (err) {
            return next(err);
        }
        G2048Model.where('score').gt(score).exec(function(err, scores) {
            if (err) {
                return next(err);
            }
            G2048Model.count({}, function (err, totalscores){
                if (err) {
                    return next(err);
                }
                var ratio = Math.ceil((1 - parseFloat(scores.length) / parseFloat(totalscores)) * 100);
                res.json(ratio);
            })
        });
    });
}