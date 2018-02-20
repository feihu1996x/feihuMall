var express = require('express');
var router = express.Router();

/* GET home page. */
//  这里的'/'定义的是二级路由
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
