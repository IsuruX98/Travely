const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalarySchema = new Schema({
    Name :{
        type: String
    },
    Eid :{
        type:String
    },
    Nic :{
        type : String
    },
    JobPosition: {
        type : String 
    },
    Numberaofdates:{
        type:String
    },

    OtHours:{
        type:String
    },
    BasicSalary:{
        type:String
    },
    NetSalary:{
        type:String
    }

})

module.exports = mongoose.model('Salary',SalarySchema)