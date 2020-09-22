const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const handlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const morgan = require('morgan');
const app = express();
const port = 4000;
const Routes = require('./routes/index.js');
const connect = require('./app/config/db/index.js');
const sortCourses = require('./app/middlewares/sortCourses.js');
const registerHelper = require('./registerHelper/tools.js');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// setup file area express-handlebars
app.engine('hbs', handlebars({ extname: '.hbs' }));

app.use(methodOverride('_method'));

// add function helper
registerHelper(Handlebars);

app.set('view engine', 'hbs');

// add morgan check request
app.use(morgan('combined'));

app.use(sortCourses);

//setup link views
app.set('views', path.join(__dirname, 'resources', 'views'));

//connect DB
connect.db();

// render page
Routes(app);

// render page
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
