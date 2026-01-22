import mongoose from "mongoose";

const schema=new mongoose.Schema({
    patName:{
        type: String
    },
    opNo:{
        type:Number
    },
    status:{
        type: Boolean,
        default:false
    }
});

const hospital=mongoose.model('hospital',schema);

export default hospital;