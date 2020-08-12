const newsRoutes = require('./news.js');
const siteRoutes = require('./site.js');
const coursesRoutes = require('./courses.js');

function Routes(app) {
    // render page home
    app.use('/home', siteRoutes);

    // render page news
    app.use('/news', newsRoutes);

    // render page news
    app.use('/courses', coursesRoutes);
}

module.exports = Routes;
