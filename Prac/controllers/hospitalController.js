import hospital from "../models/hospitalModel.js";

const getPatients = async (req, res) => {
    try {
        const mydata = await hospital.find();
        res.status(200).json(mydata);
    }
    catch (error) {
        req.status(500).json({ error: error.message });
    }
}


const admitPatients = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const addedData = await hospital.insertMany(data);
        console.log(addedData);
        console.log("Data added db");
        res.status(201).json(addedData);

    }
    catch (error) {
        res.status(500).json(error);
    }
}



export {admitPatients,getPatients};