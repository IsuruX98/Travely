const multer = require("multer");
const Train = require("../models/Train");
const path = require("path");

const storage = multer.diskStorage({
    destination : (req,file,cb)=> {
        cb(null,"images")
    },
    filename : (req,file,cb)=>{
        console.log(file);
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Only image files are allowed!'));
      }
      cb(null, true);
    }
  }).fields([
    { name: 'trainMainImg', maxCount: 1 }
  ]);

// add a train admin
const addTrain = async(req,res)=>{
    try {
        upload(req,res,async(err)=>{
            if(err){
                console.log(err.message);
                return res.status(500).json({message:"error in uploading"})
            }

            const newTrain = new Train({
                ...req.body,
               // trainMainImg : req.files.trainMainImg[0].filename
            })

            await newTrain.save();
            res.status(200).json(newTrain);
        });
    } catch(err){
        console.log(err);
        res.status(500).json({message : err.message})
    }
}

// get all trains admin -- just for now
const getAllTrains = async(req,res)=>{
    await Train.find().then((trains)=>{
        res.json(trains);
    }).catch((err)=>{
        res.send(err.message);
    })
}

// get one trains
const getSingleTrain = async (req,res)=>{
    const id = req.params.id;

    const train = await Train.findById(id).then((train)=>{
        res.json(train);
    }).catch((err)=>{
        res.json(err.message)
    })
}

// delete train  - admin
const deleteTrain = async(req,res)=>{
    const id = req.params.id;

    await Train.findByIdAndDelete(id).then(()=>{
        res.json("deleted");
    }).catch((err)=>{
        res.json(err.message);
    })
}


// update train -admin
const updateTrain = async(req,res)=>{
    const id = req.params.id;

    const {trainName,from,to,arrivalTime,depatureTime,date,price,
        noOfSeats ,description,trainMainImg,MaxBagage,classType,cancelCharges} = req.body;
    
    const updatedTrain = {trainName,from,to,arrivalTime,depatureTime,date,price,
        noOfSeats ,description,trainMainImg,MaxBagage,classType,cancelCharges
    }

    await Train.findByIdAndUpdate(id,updatedTrain).then(()=>{
        //const fetehced =  Train.findById(id);
        res.json({status : "Updated",train:updatedTrain});
    }).catch((err)=>{
        res.json(err.message);
    })
    
}

// fetch trains by from and To of searh component
const getTrainFromTo =  async (req,res) =>{
    const {from,to} = req.params;
    try{
        const trains = await Train.find({from : from , to : to})
        if(!trains){
            res.status(404).send("no trains");
        }
        res.send(trains)
    }catch(err){
        res.status(500).send(err.message);
    }
}

module.exports= {
    addTrain,
    getAllTrains,
    getSingleTrain,
    deleteTrain,
    updateTrain,
    getTrainFromTo
}