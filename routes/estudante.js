var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Olá estudante');
});

router.get('/exercicios', function(req, res, next) {
  res.send('Aqui será os exercicios');
});

router.get('/provas', function(req, res, next) {
    res.send('Aqui será as provas');
  });

router.get('/notas', function(req, res, next) {
    res.send('Aqui será as notas');
  });
  

module.exports = router;
