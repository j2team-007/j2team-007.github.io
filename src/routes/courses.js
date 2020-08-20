const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController.js');

router.put('/:id/completed', CourseController.updated);

router.post('/backCourses', CourseController.backCourses);

router.delete('/:id/delete-course', CourseController.deleteSoft);

router.delete('/:id/delete-course-real', CourseController.deleteForce);

router.patch('/:id/restore-course', CourseController.restore);

router.get('/:id/edit-course', CourseController.edit);

router.post(
    '/update-course/action-global',
    CourseController.actionsUpdateGlobal,
);

router.post(
    '/trash-courses/action-global',
    CourseController.actionsTrashGlobal,
);

router.get('/update-course', CourseController.updateCourse);

router.get('/trash-courses', CourseController.trashCourse);

router.get('/', CourseController.courses);

router.get('/create', CourseController.create);

router.get('/:slug', CourseController.slug);

module.exports = router;
