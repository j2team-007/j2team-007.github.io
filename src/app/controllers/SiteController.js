const Course = require('../model/Course.js');

class SiteController {
    // GET [/home/]
    index(req, res) {
        //     res.render('home');
        Course.find({}, function (error, courses) {
            // docs.forEach
            if (!error) {
                res.json(courses);
            } else {
                res.status(500).json({ error: 'message' });
            }
        });
    }
    // GET [/about/]
    about(req, res) {
        res.render('about');
    }
}

module.exports = new SiteController();
