import student from "../models/studentsModels.js";

const getStudentsDetails = async(req, res) => {
    try{
        const {stdName,stdRoll,phone} = req.query;
        console.log(stdName);
        // const mydata = await student.find();
        // const mydata = await student.findOne({phone: 1234});
        const mydata = await student.find();
        res.status(200).json(mydata);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};
 
const getStudentByfield = async (req, res) => {
    try{
        const roll = req.params.roll;
        // const data = await student.findOne({stdRoll: roll});
        const data = await student.findById({_id: roll});
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({error: error.message});
    }

}

const addStudents = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        // const addeddata = await student.create(data);
        const addeddata = await student.insertMany(data);
        console.log(addeddata);
        res.status(201).json("data added");
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export { getStudentsDetails, addStudents, getStudentByfield };

