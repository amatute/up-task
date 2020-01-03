const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const helpers = require('./helpers');

const db = require('./config/db');

require('./models/Proyectos');
require('./models/Tareas');

db.sync()
  .then(() => console.log('BD connection... OK.'))
  .catch(error => console.log(error));

const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, './views'));

// Pasar var dump a la aplicación
app.use((req, res, next) => {
  res.locals.vardump = helpers.vardump;
  //res.locals.mensajes = req.flash();
  //res.locals.usuario = {...req.user} || null;
  next();
});

app.use(bodyParser.urlencoded({extended: true}));

//app.use(expressValidator());

app.use('/', routes());

app.listen(3000);

