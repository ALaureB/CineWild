var express = require('express');
var router = express.Router();
const Movies = require('../controllers/Movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/popular', Movies.mostPopularMovie);
router.get('/tenpopular', Movies.tenMostPopularMovie);

module.exports = router;