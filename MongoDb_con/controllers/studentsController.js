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

const updateStudents=async (req,res)=>{
   try{
        const {id}=req.params;
        const data=req.body;
        // const updatedData=await student.findOneAndUpdate({stdRoll:id}, data ,{new:true })//filtered, neww data, truee
        const updatedData=await student.findByIdAndUpdate({_id:id}, data ,{new:true })//filtered, neww data, truee
 

        if(!updatedData){//student with no of the roll num
            return res.status(404).json({message:"user not exist"});
        }
        res.status(200).json({student: updatedData,message:"student updated"})
   }
   catch(error){
    res.status(200).json(error)
   }
}

export { getStudentsDetails, addStudents, getStudentByfield ,updateStudents};