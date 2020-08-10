const Course = require('../model/Course.js');
const { mutipleMongooseObject } = require('../help/tool.js');
const { MongooseObject } = require('../help/tool.js');

class SiteController {
    // GET [/home/courses]
    courses(req, res, next) {
        //     res.render('home');
        Course.find({})
            .then((Course) => {
                res.render('courses', {
                    Course: mutipleMongooseObject(Course),
                });
            })
            .catch(next);
    }

    // GET [/home/:slug]
    slug(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((Course) => {
                res.render('courses-propety', {
                    Course: MongooseObject(Course),
                });
            })
            .catch(next);
    }

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
