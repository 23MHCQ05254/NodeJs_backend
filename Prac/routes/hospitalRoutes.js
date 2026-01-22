import express from 'express';
const router=express.Router();
import { admitPatients,getPatients } from '../controllers/hospitalController.js';

router.get('/getPatients',getPatients);
router.post('/addPatients',admitPatients);

export default router;