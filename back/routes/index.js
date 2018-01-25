var express = require('express');
var router = express.Router();
const Movies = require('../controllers/Movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/popular', Movies.mostPopularMovie);
router.get('/tenpopular', Movies.tenMostPopularMovie);
router.get('/animation', Movies.animation);
router.get('/comedy', Movies.comedy);
router.get('/adventure', Movies.adventure);
router.get('/:id', Movies.getMovieDetails);

router.get('/:year', Movies.year);

router.post('/notify', Movies.notify);


module.exports = router;