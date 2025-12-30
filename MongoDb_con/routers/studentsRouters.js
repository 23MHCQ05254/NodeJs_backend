
import express from 'express';
const router = express.Router();
import {getStudentsDetails,addStudents, getStudentByfield,updateStudents} from '../controllers/studentsController.js';

router.get('/get-students', getStudentsDetails);
router.post('/add-students', addStudents);
router.get('/get-students-byfield/:roll', getStudentByfield);
router.put('/updateStudents/:id', updateStudents);

export default router;
