var express = require('express');
var router = express.Router();

const loginController = require('../controllers').login;


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


/* Milk Router */
router.post('/api/login', loginController.login);

module.exports = router;
