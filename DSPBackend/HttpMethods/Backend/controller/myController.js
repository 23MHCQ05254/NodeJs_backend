const credentials=require('../Models/credentials.js')


let students=[];
// GET → read data
const getStudents = (req, res) => {
    res.json(students);
};

// POST → create data
const addStudent = (req, res) => {
    const newStudent = {
        id: Date.now(),
        name: req.body.name
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
};


// PUT → update data
const updateStudent = (req, res) => {
    const id = Number(req.params.id);
    const { name } = req.body;

    students = students.map(stu =>
        stu.id === id ? { ...stu, name } : stu
    );

    res.json({ message: "Student updated" });
};

// DELETE → remove data
const deleteStudent = (req, res) => {
    const id = Number(req.params.id);
    students = students.filter(stu => stu.id !== id);
    res.json({ message: "Student deleted" });
};

module.exports = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
};