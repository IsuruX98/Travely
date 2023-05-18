const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    Name :{
        type: String
    },
    Email :{
        type:String
    },
    Nic:{
        type : String
    },
    Eid: {
        type : String 
    },
    Position:{
        type:String
    },

    BasicSalary:{
        type:String
    },
    Department:{
        type:String
    },
    salary: {
    type: Schema.Types.ObjectId,
    ref: 'Salary'
  }
})

module.exports = mongoose.model('Employee',EmployeeSchema)