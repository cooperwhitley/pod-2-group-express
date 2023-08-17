var express = require('express');
const { options } = require('.');
var router = express.Router();

const ROOT_URL = 'https://poetrydb.org'

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch(`${ROOT_URL}/random/1`)
    .then(res => res.json())
    .then(poemData => {
      console.log(poemData)
      res.render('index', { poemData })
    })
});

module.exports = router;
