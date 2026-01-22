
const express = require('express');
const router = express.Router();

const {
    getStudents,
    addStudent,   
    updateStudent,
    deleteStudent
} = require('../controller/myController');

// GET
router.get('/students', getStudents);

// POST
router.post('/students', addStudent);

// PUT
router.put('/students/:id', updateStudent);

// DELETE
router.delete('/students/:id', deleteStudent);
                                             
module.exports = router;