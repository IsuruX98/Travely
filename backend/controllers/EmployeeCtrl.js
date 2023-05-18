const Employee = require("../models/Employee")

// add Employee
const addEmployee = async(req,res)=>{
    const newEmployee = new Employee({
        ...req.body
    })

    await newEmployee.save().then(()=>{
        res.json(newEmployee)
    }).catch((err)=>{
        res.json(err.message)
    })
}

// get all Employees
const getAllEmployees = async(req,res)=>{
    await Employee.find().then((Employee)=>{
        res.json(Employee)
    }).catch((err)=>{
        res.json(err.message)
    })
}

//get one Employee
const getOneEmployee = async (req,res)=>{
    const id = req.params.id;
    console.log(id)
    const singleEmployee = await Employee.findById(id).then((Employee)=>{
        res.json(refund);
    }).catch((err)=>{
        res.json(err.message)
    })
}

// delete Employee
const deleteEmployee = async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    await Employee.findByIdAndDelete(id).then(()=>{
        res.json("deleted")
    }).catch((err)=>{
        res.json(err.message)
    })

}

// update Employee
const updateEmployee = async (req,res)=>{
    const id = req.params.id;

    const {Name,Email,Nic,Eid,Position,BasicSalary,Department} = req.body;

    const updatedEmployee = {Name,Email,Nic,Eid,Position,BasicSalary,Department}

    await Employee.findByIdAndUpdate(id,updatedEmployee).then(()=>{
        res.json({status:"Update"})
    }).catch((err)=>{
        res.json(err.message)
    })
}

module.exports ={
    addEmployee,
    getAllEmployees,
    getOneEmployee,
    deleteEmployee,
    updateEmployee
}