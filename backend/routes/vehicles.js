const router = require("express").Router();
const vehicleController = require("../controllers/vehicleController");


router
        .route("/")
        .post(vehicleController.addVehicle) //add a new vehicle - vehicle owner                         
        .get(vehicleController.getAllVehicle)   //get all vehicles - vehicle admin                      
        
router
        .route("/:id")
        .get(vehicleController.getSpecificvehicle) //get a specific vehicle by id - vehicle admin           
        .delete(vehicleController.deleteVehicle) //delete a vehicle by id - vehicle admin               
        .patch(vehicleController.updateVehicle) //update a vehicle - vehicle owner                      
        
router
        .route("/accept/:id")
        .get(vehicleController.acceptVehicle) //accept a vehicle - vehicle admin                        

router
        .route("/myvehicles/:userId")
        .get(vehicleController.getMyVehicles) //get all vehicles of a specific user - vehicle owner  
        
//router to get vehicles by location and type 
router
        .route("/get/:vehicleType/:location")
        .get(vehicleController.getVehiclesByTypeAndLocation) //get all vehicles by location and type - vehicle admin


router
        .route("/type/get/:vehicleType")
        .get(vehicleController.getVehicleByType) //get all vehicles by type - vehicle admin postman tested

router
        .route("/location/get/:location")
        .get(vehicleController.getVehicleByLocation) //get all vehicles by location - vehicle admin postman tested
        

//tested by using postman. all routes working well.


module.exports = router;