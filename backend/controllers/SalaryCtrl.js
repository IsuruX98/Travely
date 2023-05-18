const Employee = require("../models/Employee")
const Salary = require("../models/Salary")

// add Salary
const addSalary = async(req,res)=>{
    const newSalary = new Salary({
        ...req.body
    })

    await newSalary.save().then(()=>{
        res.json(newSalary)
    }).catch((err)=>{
        res.json(err.message)
    })
}

// get all Salary details
const getAllSalary = async(req,res)=>{
    await Salary.find().then((Salary)=>{
        res.json(Salary)
    }).catch((err)=>{
        res.json(err.message)
    })
}

//get one Salary Detail
const getOneSalary = async (req,res)=>{
    const id = req.params.id;
    console.log(id)
    const singleSalary = await Salary.findById(id).then((Salary)=>{
        res.json(Salary);
    }).catch((err)=>{
        res.json(err.message)
    })
}

// delete Salary
const deleteSalary = async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    await Employee.findByIdAndDelete(id).then(()=>{
        res.json("deleted")
    }).catch((err)=>{
        res.json(err.message)
    })

}

// update Salary
const updateSalary = async (req,res)=>{
    const id = req.params.id;

    const {Name,Nic,Eid,Position,BasicSalary,OtHours,Numberofdates} = req.body;

    const updatedSalary = {Name,Nic,Eid,Position,BasicSalary,OtHours,Numberofdates}

    await Salary.findByIdAndUpdate(id,updatedSalary).then(()=>{
        res.json({status:"Update"})
    }).catch((err)=>{
        res.json(err.message)
    })
}

module.exports ={
    addSalary,
    getAllSalary,
    getOneSalary,
    deleteSalary,
    updateSalary
}