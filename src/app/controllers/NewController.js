class NewController {
    // GET [/news/;slug]
    show(req, res) {
        res.send('New Detail!!!');
    }
    // GET [/news/]
    index(req, res) {
        res.render('news');
    }
}

module.exports = new NewController();
