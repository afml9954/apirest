var express = require('express');
var router = express.Router();

const milkDetailController = require('../controllers').milk;
const milkManController = require('../controllers').milkman;
const unitController = require('../controllers').unit;
const productionController = require('../controllers').production;
const supplyController = require('../controllers').supply;
const loginController = require('../controllers').login;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Milk Router */
router.get('/api/milk', milkDetailController.list);
router.get('/api/milk/:id', milkDetailController.getById);
router.post('/api/milk', milkDetailController.add);
router.put('/api/milk/:id', milkDetailController.update);
router.delete('/api/milk/:id', milkDetailController.delete);

/* Milkman Router */
router.get('/api/milkman', milkManController.list);
router.get('/api/milkman/:id', milkManController.getById);
router.post('/api/milkman', milkManController.add);
router.put('/api/milkman/:id', milkManController.update);
router.delete('/api/milkman/:id', milkManController.delete);

/* Unit Router */
router.get('/api/unit', unitController.list);
router.get('/api/unit/:id', unitController.getById);
router.post('/api/unit', unitController.add);
router.put('/api/unit/:id', unitController.update);
router.delete('/api/unit/:id', unitController.delete);

/* Production Router */
router.get('/api/production', productionController.list);
router.get('/api/production/:id', productionController.getById);
router.post('/api/production', productionController.add);
router.put('/api/production/:id', productionController.update);
router.delete('/api/production/:id', productionController.delete);

/* Supply Router */
router.get('/api/supplies', supplyController.list);
router.get('/api/supplies/:id', supplyController.getById);
router.post('/api/supplies', supplyController.add);
router.put('/api/supplies/:id', supplyController.update);
router.delete('/api/supplies/:id', supplyController.delete);

/* Login */
router.post('/api/login', loginController.login);


module.exports = router;
