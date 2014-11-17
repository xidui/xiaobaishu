/**
 * config
 */

var path = require('path');
var pkg = require('./package.json');

var config = {
  debug: true,
  name: 'Node Club',
  description: 'Node Club 是用Node.js开发的社区软件',
  version: pkg.version,

  // site settings
  host: 'www.xiaobaishu.com',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: 'UA-41753901-5',
  site_logo: '', // default is `name`
  site_static_host: '', // 静态文件存储域名
  mini_assets: false, // 静态文件的合并压缩，详见视图中的Loader
  site_enable_search_preview: false, // 开启google search preview
  site_google_search_domain:  'cnodejs.org',  // google search preview中要搜索的域名

  upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  db: 'mongodb://106.185.26.65/xiaobaishu',
  session_secret: 'xiaomiao',
  auth_cookie_name: 'xiaomiao',
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 限制发帖时间间隔，单位：毫秒
  post_interval: 10000,

  // RSS
  rss: {
    title: 'CNode：Node.js专业中文社区',
    link: 'http://cnodejs.org',
    language: 'zh-cn',
    description: 'CNode：Node.js专业中文社区',

    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // site links
  site_links: [
    {
      'text': 'Node 官方网站',
      'url': 'http://nodejs.org/'
    }
  ],

  // sidebar ads
  side_ads: [
    
  ],

  // mail SMTP
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'club@126.com',
      pass: 'club'
    }
  },

  //weibo app key
  weibo_key: 10000000,

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { admin: true },

  // [ { name: 'plugin_name', options: { ... }, ... ]
  plugins: [
    // { name: 'onehost', options: { host: 'localhost.cnodejs.org' } },
    // { name: 'wordpress_redirect', options: {} }
  ],

  GITHUB_OAUTH: {
    clientID: 'your GITHUB_CLIENT_ID',
    clientSecret: 'your GITHUB_CLIENT_SECRET',
    callbackURL: 'http://cnodejs.org/auth/github/callback',
  },
  
  allow_sign_up: true,

  nav: [
      {name : '首页', url : '', click : '', login : 0},
      {name : '说说', url : '/#/view/note', click : '', login : 0},
      {name : '杂文', url : '/#/view/essay', click : '', login : 0},
      {name : '博客', url : '', click : '', login : 0},
      {name : '注册', url : '/#/view/register', click : '', login : -1},
      {name : '登陆', url : '/#/view/login', click : '', login : -1},
      {name : '退出', url : '', click : 'logout();', login : 1}
  ]
};

module.exports = config;
module.exports.config = config;