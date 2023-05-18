const Finance = require("../models/FinanceHealth")


// add Finance record
const addRecord = async(req,res)=>{



    const newFinance = new Finance({
        ...req.body
    })

    await newFinance.save().then(()=>{
        res.json(newFinance)
    }).catch((err)=>{
        res.json(err.message)
    })
}

// get all Finance Records
const getAllRecords = async(req,res)=>{
    await Finance.find().then((Finance)=>{
        res.json(Finance)
    }).catch((err)=>{
        res.json(err.message)
    })
}

//get one Finance Record
const getOneRecord = async (req,res)=>{
    const id = req.params.id;
    console.log(id)
    const singleRecord= await Finance.findById(id).then((Employee)=>{
        res.json(singleRecord);
    }).catch((err)=>{
        res.json(err.message)
    })
}

// delete Finance Record
const deleteRecord = async(req,res)=>{
    const id = req.params.id;
    
    await Finance.findByIdAndDelete(id).then(()=>{
        res.json("deleted")
    }).catch((err)=>{
        res.json(err.message)
    })

}

// update Finance Record
const updateRecord = async (req,res)=>{
    const id = req.params.id;

    const {RecordId,Section,Income,Expences,Month,} = req.body;

    const updatedRecord = {RecordId,Section,Income,Expences,Month}

    await Finance.findByIdAndUpdate(id,updatedRecord).then(()=>{
        res.json({status:"Update"})
    }).catch((err)=>{
        res.json(err.message)
    })
}

module.exports ={
    addRecord,
    getAllRecords,
    getOneRecord,
    deleteRecord,
    updateRecord
}