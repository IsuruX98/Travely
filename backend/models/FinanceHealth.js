const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FinanceHSchema = new Schema({
    RecordId :{
        type: String
    },
    Section :{
        type:String
    },
    Income:{
        type : String
    },
    Expences: {
        type : String 
    },
    Month:{
        type:String
    },

    
})

module.exports = mongoose.model('FinanceH',FinanceHSchema)