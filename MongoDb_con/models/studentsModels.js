import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    stdName: {
        type: String
    },
    stdRoll : {
        type: String
    },
    phone:{
        type:Number
    },
    status :{
        type: Boolean,
        default:false
    }
});
const student = mongoose.model("student", studentSchema);
export default student;