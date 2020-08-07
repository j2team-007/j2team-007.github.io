const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 4000;
const Routes = require('./routes/index.js');

app.use(express.static(path.join(__dirname, 'public')));

// setup file area express-handlebars
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// add morgan check request
app.use(morgan('combined'));

//setup link views
app.set('views', path.join(__dirname, 'resources\\views'));

// render page
Routes(app);

// render page
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
