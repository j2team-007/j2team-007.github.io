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

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// setup file area express-handlebars
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        // helpers: {
        //     sum: function (a, b) { return a + b },
        // },
    }),
);

app.use(methodOverride('_method'));

// add function helper
Handlebars.registerHelper('sum', function (a, b) {
    return a + b;
});

app.set('view engine', 'hbs');

// add morgan check request
app.use(morgan('combined'));

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
