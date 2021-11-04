var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('checkl');
  res.send('respond with a resource');
});

router.get('/insatisfied',  async(req, res) => {
  const users = await controller.getInsatisfiedUsers();
  res.status(200).json(users);
})

module.exports = router;
