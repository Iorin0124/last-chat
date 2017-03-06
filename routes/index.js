var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HomePage' });
});

module.exports = router;


/* GET new Registration page.  新規ユーザー登録 */
router.get('/new', function(req, res, next) {
  res.render('newuser', { title: '新規ユーザー登録' });
});

module.exports = router;

/* GET Login page.  ログインページ */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'ログイン' });
});

module.exports = router;
