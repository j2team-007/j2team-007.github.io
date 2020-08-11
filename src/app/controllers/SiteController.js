const Course = require('../model/Course.js');
const { mutipleMongooseObject } = require('../help/tool.js');
const { MongooseObject } = require('../help/tool.js');

class SiteController {
    // GET [/home/courses]
    courses(req, res, next) {
        //     res.render('home');
        Course.find({})
            .then((Course) => {
                res.render('course-maneger/courses', {
                    Course: mutipleMongooseObject(Course),
                });
            })
            .catch(next);
    }

    // GET [/home/:slug]
    slug(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((Course) => {
                res.render('course-maneger/courses-propety', {
                    Course: MongooseObject(Course),
                });
            })
            .catch(next);
    }

    // GET [/home/courses/create]
    create(req, res) {
        res.render('course-maneger/create');
    }

    // post [/home/courses]
    backCourses(req, res, next) {
        const formBack = req.body;
        formBack.image = `https://img.youtube.com/vi/${formBack.videoId}/sddefault.jpg`;
        var Courses = new Course(formBack);
        Courses.save()
            .then(() => res.redirect('/home/courses'))
            .catch(next);
    }

    index(req, res) {
        res.render('home');
    }

    // GET [/about/]
    about(req, res) {
        res.render('about');
    }
}

module.exports = new SiteController();
