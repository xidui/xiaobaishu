var sign = require('./sign');
var Note = require('../proxy/note');

exports.getNotes = function (req, res, next) {
    var data = {
        state : true,
        notes : []
    };
    var user_id = sign.getUserIdByCookie(req);
    if (!user_id){
        data.state = false;
        res.json(data);
    }
    var query = { author_id : user_id };
    var opt = { sort : [ {'create_at': 'desc'} ] };
    Note.getNotesByQuery(query, opt, function(err, notes){
        if (err) {
            return next(err);
        }
        data.notes = notes;
        res.json(data);
    })
}

exports.createNotes = function (req, res, next) {
    var data = {
        state   :   true
    };
    var user_id = sign.getUserIdByCookie(req);
    if (!user_id){
        data.state = false;
        res.json(data);
    }
    var content = req.param('content');
    Note.newAndSave(content, user_id, function(err){
        if (err) {
            return next(err);
        }
        res.json(data);
    });
}

exports.delNote = function (req, res, next) {
    var data = {
        state   :   true
    };
    var user_id = sign.getUserIdByCookie(req);
    if (!user_id){
        data.state = false;
        res.json(data);
    }
    var note_id = req.param('note_id');
    Note.delNoteById(note_id, function(err){
        if (err) {
            data.state = false;
        }
        res.json(data);
    });
}