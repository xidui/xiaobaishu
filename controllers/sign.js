var User = require('../proxy').User;
var crypto = require('crypto');

var check = require('validator').check,
    sanitize = require('validator').sanitize;

var config = require('../config').config;

/* 用户注册
 * */
exports.register = function (req, res, next) {
    var name = sanitize(req.body.name).trim();
    var loginname = sanitize(name).xss();
    var pass = req.param('pass');
    var email = sanitize(req.body.email).trim();
    email = email.toLowerCase();
    email = sanitize(email).xss();

    User.getUsersByQuery({'$or': [{'loginname': loginname}, {'email': email}]}, {}, function (err, users) {
        if (err) {
            return next(err);
        }
        if (users.length > 0) {
            console.log('用户名或邮箱已被使用。');
            return next(err);
        }

        // md5 the pass
        pass = md5(pass);

        User.newAndSave(loginname, pass, email, function (err) {
            if (err) {
                return next(err);
            }
        });
    });
};

/* 用户登陆
 * */
exports.login = function (req, res, next) {
    var name = sanitize(req.body.name).trim();
    var loginname = sanitize(name).xss();
    var pass = req.param('pass');

    User.getUsersByQuery({'$or': [{'loginname': loginname}, {'email': loginname}]}, {}, function (err, users) {
        if (err) {
            return next(err);
        }

        if (users.length != 1){
            console.log("用户不存在或存在多个");
            return next(err);
        }

        var user = users[0];

        // md5 the pass
        pass = md5(pass);

        if (pass !== user.pass) {
            console.log("密码不对哦");
            return res.json({state:false});
        }

        gen_session(user, res);
        res.json({state:true});
    });
};

/* 用户退出
 * */
exports.logout = function (req, res, next) {
    res.clearCookie(config.auth_cookie_name, { path: '/' });
    res.json({state:true});
};

exports.getUserIdByCookie = function(req){
    var cookie = req.cookies[config.auth_cookie_name];
    if (!cookie) {
        return;
    }

    var auth_token = decrypt(cookie, config.session_secret);
    var auth = auth_token.split('\t');
    var user_id = auth[0];
    if (user_id){
        return user_id;
    }
    return;
}





function gen_session(user, res) {
    var auth_token = encrypt(user._id + '\t' + user.loginname + '\t' + user.pass + '\t' + user.email, config.session_secret);
    res.cookie(config.auth_cookie_name, auth_token, {path: '/', maxAge: 1000 * 60 * 60 * 24 * 30}); //cookie 有效期30天
}

function md5(str) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
}

function encrypt(str, secret) {
    var cipher = crypto.createCipher('aes192', secret);
    var enc = cipher.update(str, 'utf8', 'hex');
    enc += cipher.final('hex');
    return enc;
}

function decrypt(str, secret) {
    var decipher = crypto.createDecipher('aes192', secret);
    var dec = decipher.update(str, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}