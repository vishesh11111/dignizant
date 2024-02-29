const model = require("../models/user.model");

let Controllers = {}

Controllers.postData = async(req, res)=>{
    try {
        console.log(req.body)
        const create_Data = await model.create(req.body);
        res.status(200).json({message: "Create Data Succefully"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

Controllers.GetOurFile = async(req, res)=>{
    try {
        console.log(req.body)
        const create_Data = await model.find({email: req.body?.email});
        res.status(200).json({message: "get Data Succefully", data: create_Data})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = Controllers;