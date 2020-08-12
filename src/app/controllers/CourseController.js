const Course = require('../model/Course.js');
const { mutipleMongooseObject } = require('../help/tool.js');
const { MongooseObject } = require('../help/tool.js');

class CourseController {
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
            .then(() => res.redirect('/courses'))
            .catch(next);
    }

    updateCourse(req, res, next) {
        Course.find({})
            .then((Course) => {
                res.render('course-maneger/update-course', {
                    Course: mutipleMongooseObject(Course),
                });
            })
            .catch(next);
    }

    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((Course) => {
                res.render('course-maneger/edits', {
                    Course: MongooseObject(Course),
                });
            })
            .catch(next);
    }

    completed(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/courses/update-course'))
            .catch(next);
    }

    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/courses/update-course'))
            .catch(next);
    }
}

module.exports = new CourseController();
