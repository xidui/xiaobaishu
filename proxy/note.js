/**
 * Created by apple on 14-9-19.
 */
var models = require('../models');
var Note = models.Note;

/**
 * 根据noteID，查找说说
 * Callback:
 * - err, 数据库异常
 * - note, 说说
 * @param {String} id noteID
 * @param {Function} callback 回调函数
 */
exports.getNoteById = function (id, callback) {
    Note.find({ _id: id }, callback);
}

/**
 * 根据noteID，删除说说
 * Callback:
 * - err, 数据库异常
 * @param {String} id noteID
 * @param {Function} callback 回调函数
 */
exports.delNoteById = function (id, callback) {
    Note.remove({ _id: id }, callback);
}

/**
 * 根据用户ID，查找说说
 * Callback:
 * - err, 数据库异常
 * - notes, 说说列表
 * @param {String} id 用户ID
 * @param {Function} callback 回调函数
 */
exports.getNotesByUserId = function (id, callback) {
    Note.find({ author_id: id }, callback);
}

/**
 * 根据用户id列表查找说说
 * Callback:
 * - err, 数据库异常
 * - notes, 说说列表
 * @param {Array} ids 用户名id列表
 * @param {Function} callback 回调函数
 */
exports.getNotesByUserIds = function (ids, callback) {
    if (ids.length === 0) {
        return callback(null, []);
    }
    Note.find({ author_id: { $in: ids } }, callback);
};

/**
 * 根据关键字，获取一组用户
 * Callback:
 * - err, 数据库异常
 * - notes, 说说列表
 * @param {String} query 关键字
 * @param {Object} opt 选项
 * @param {Function} callback 回调函数
 */
exports.getNotesByQuery = function (query, opt, callback) {
  Note.find(query, '[ content , create_at ]', opt, callback);
};

exports.newAndSave = function (content, author_id, callback) {
    var note = new Note();
    note.content = content;
    note.author_id = author_id;
    note.save(callback);
};