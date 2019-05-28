var express = require('express');
var router = express.Router();
var featureToggles = require("../public/javascripts/featureToggles");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', featureToggles });
});

router.get('/featureToggles', function(req, res, next) {
  res.render('featureToggles', { featureToggles});
});

router.post('/featureToggles', function(req, res, next) {
  console.log("Body: ", req.body);
  featureToggles.toggleValues(req.body);
  res.render('featureToggles', { featureToggles});
  res.end();
});

module.exports = router;
