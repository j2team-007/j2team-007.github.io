const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController.js');

router.put('/:id/completed', CourseController.completed);

router.post('/backCourses', CourseController.backCourses);

router.get('/:id/delete-course', CourseController.delete);

router.get('/:id/edit-course', CourseController.edit);

router.get('/update-course', CourseController.updateCourse);

router.get('/', CourseController.courses);

router.get('/create', CourseController.create);

router.get('/:slug', CourseController.slug);

module.exports = router;
