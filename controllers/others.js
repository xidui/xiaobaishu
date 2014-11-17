var config = require('../config').config;

exports.navitem = function(req, res, next){
    var nav = [];
    var cookie = req.cookies[config.auth_cookie_name];

    config.nav.forEach(function(e){
        if (e.login == 0){
            nav.push({name : e.name, url : e.url, click : e.click});
        }else if (e.login == 1){
            if (cookie){
                nav.push({name : e.name, url : e.url, click : e.click});
            }
        }else{
            if (!cookie){
                nav.push({name : e.name, url : e.url, click : e.click});
            }
        }
    });
    res.json({state : true, items : nav});
}
