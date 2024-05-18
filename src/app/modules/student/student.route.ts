import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

// will call controller function
router.post('/create-student', studentControllers.createStudent);
router.get('/get-all-students', studentControllers.getAllStudent);

export const studentsRoutes = router;
