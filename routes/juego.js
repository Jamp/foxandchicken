var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/juego', function(req, res, next) {
  res.render('juego', { title: 'Juego' });
});

module.exports = router;
