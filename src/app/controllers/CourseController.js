const Course = require('../model/Course.js');
const { mutipleMongooseObject } = require('../help/tool.js');
const { MongooseObject } = require('../help/tool.js');
const { Promise } = require('mongoose');

class CourseController {
    // GET [/]
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

    // GET [/:slug]
    slug(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((Course) => {
                res.render('course-maneger/courses-propety', {
                    Course: MongooseObject(Course),
                });
            })
            .catch(next);
    }

    // GET [/create]
    create(req, res) {
        res.render('course-maneger/create');
    }

    // post [/backCourses]
    backCourses(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        var Courses = new Course(req.body);
        Courses.save()
            .then(() => res.redirect('/courses'))
            .catch(next);
    }

    // [GET] /update-course
    updateCourse(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([Course, countCourseDelete]) => {
                res.render('course-maneger/update-course', {
                    countCourseDelete,
                    Course: mutipleMongooseObject(Course),
                });
            })
            .catch(next);
    }

    // [GET] /:id/edit-course
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((Course) => {
                res.render('course-maneger/edits', {
                    Course: MongooseObject(Course),
                });
            })
            .catch(next);
    }

    // [PUT] /:id/completed
    updated(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/courses/update-course'))
            .catch(next);
    }

    // [DELETE] /:id/delete-course
    deleteSoft(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/courses/update-course'))
            .catch(next);
    }

    // [GET] /trash-courses
    trashCourse(req, res, next) {
        Promise.all([Course.findDeleted({}), Course.countDocuments()])
            .then(([Course, countpresentCourses]) => {
                res.render('course-maneger/trash-course', {
                    Course: mutipleMongooseObject(Course),
                    countpresentCourses,
                });
            })
            .catch(next);
    }

    // [PATCH] /:id/restore-course
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /:id/delete-course-real
    deleteForce(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /:id/update-course
    actionsUpdateGlobal(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            default:
                res.json({ message: 'Error Invalid!' });
                break;
        }
    }

    actionsTrashGlobal(req, res, next) {
        switch (req.body.action) {
            case 'hard-delete':
                Course.deleteOne({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'restore':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            default:
                res.json({ message: 'Error Invalid!' });
                break;
        }
    }
}

module.exports = new CourseController();
