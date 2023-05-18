const Refund = require("../models/Refunds")

// add refunds
const addRefund = async(req,res)=>{
    const newRefund = new Refund({
        ...req.body
    })

    await newRefund.save().then(()=>{
        res.json(newRefund)
    }).catch((err)=>{
        res.json(err.message)
    })
}

// get all refunds
const getAllRefunds = async(req,res)=>{
    await Refund.find().then((Refunds)=>{
        res.json(Refunds)
    }).catch((err)=>{
        res.json(err.message)
    })
}

//get one refund
const getOneRefund = async (req,res)=>{
    const id = req.params.id;
    console.log(id)
    const singleRefund = await Refund.findById(id).then((refund)=>{
        res.json(refund);
    }).catch((err)=>{
        res.json(err.message)
    })
}

// delete refund
const deleteRefund = async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    await Refund.findByIdAndDelete(id).then(()=>{
        res.json("deleted")
    }).catch((err)=>{
        res.json(err.message)
    })

}

// update refund
const updateRefund = async (req,res)=>{
    const id = req.params.id;

    const {Name,Email,Requested_Date,Package_name,Additional_note} = req.body;

    const updatedRefund = {Name,Email,Requested_Date,Package_name,Additional_note}

    await Refund.findByIdAndUpdate(id,updatedRefund).then(()=>{
        res.json({status:"Update"})
    }).catch((err)=>{
        res.json(err.message)
    })
}

module.exports ={
    addRefund,
    getAllRefunds,
    getOneRefund,
    deleteRefund,
    updateRefund
}