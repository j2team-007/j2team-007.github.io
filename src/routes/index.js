const newsRoutes = require('./news.js');
const siteRoutes = require('./site.js');

function Routes(app) {
    // render page home
    app.use('/home', siteRoutes);

    // render page news
    app.use('/news', newsRoutes);

}

module.exports = Routes;