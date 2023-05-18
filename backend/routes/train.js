const router = require("express").Router();
const trainCtrl = require("../controllers/trainCtrl");

router.route("/add").post(trainCtrl.addTrain);    // add train - admin
router.route("/").get(trainCtrl.getAllTrains);   // view all trains - admin and touris
router.route("/get/:id").get(trainCtrl.getSingleTrain);    // view only one train -admin and tourist
router.route("/update/:id").put(trainCtrl.updateTrain);  // edit train - admin
router.route("/delete/:id").delete(trainCtrl.deleteTrain);   // delete train
router.route("/fetch/:from/:to").get(trainCtrl.getTrainFromTo);     // sort according to from and to


module.exports = router;