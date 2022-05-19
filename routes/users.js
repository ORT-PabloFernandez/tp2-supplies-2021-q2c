var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('checkl');
  res.send('respond with a resource');
});

router.get('/nothappy',async function(req, res, next) {
  console.log('checkl');
  res.send(await controller.getUsersNothappy());
});

router.get('/:mail', async function(req, res, next) {
  console.log('checkl');
  res.send(await controller.getItems(req.params.mail));
});

module.exports = router;
