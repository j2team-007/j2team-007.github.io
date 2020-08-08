const Course = require('../model/Course.js');
const { mutipleMongooseObject } = require('../help/tool.js');

class SiteController {
    // GET [/home/]
    index(req, res, next) {
        //     res.render('home');
        Course.find({})
            .then((Course) => {
                res.render('home', {
                    Course: mutipleMongooseObject(Course),
                });
                console.log(mutipleMongooseObject(Course));
            })
            .catch(next);
    }
    // GET [/about/]
    about(req, res) {
        res.render('about');
    }
}

module.exports = new SiteController();
