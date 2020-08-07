class SiteController {
    // GET [/home/]
    index(req, res) {
        res.render('home');
    }

    // GET [/about/]
    about(req, res) {
        res.render('about');
    }
}

module.exports = new SiteController();
