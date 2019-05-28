var express = require('express');
var router = express.Router();
var featureToggles = require("../public/javascripts/featureToggles");
var client = require("../public/javascripts/client");

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Voxxed Days SG 2019', featureToggles });
});

router.get('/featureToggles', (req, res) => {
  res.render('featureToggles', { featureToggles});
});

router.post('/featureToggles', (req, res) => {
  console.log("Body: ", req.body);
  featureToggles.toggleValues(req.body);
  res.render('featureToggles', { featureToggles});
  res.end();
});

router.get('/api', async (req, res) => {
  let api = await client.fetchAPIVersion();
  res.render('e2e', { api })
});

module.exports = router;
