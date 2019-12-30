const express = require('express');
const router = express.Router();

const proyectosController = require('../controllers/proyectosController');

module.exports = () => {
  router.get('/', proyectosController.proyectosHome);
  router.get('/nosotros', (req, res) => {
    res.send('Nosotros');
  })
  return router;
}