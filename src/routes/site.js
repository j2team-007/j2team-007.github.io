const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController.js');

router.post('/courses/backCourses', siteController.backCourses);

router.get('/courses', siteController.courses);

router.get('/courses/create', siteController.create);

router.get('/courses/:slug', siteController.slug);

router.get('/about', siteController.about);

router.get('/', siteController.index);

module.exports = router;
