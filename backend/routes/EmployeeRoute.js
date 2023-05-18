const router = require("express").Router();
const Employeectrl = require("../controllers/EmployeeCtrl")

router.route("/add").post(Employeectrl.addEmployee);
router.route("/").get(Employeectrl.getAllEmployees);
router.route("/get/:id").get(Employeectrl.getOneEmployee);
router.route("/delete/:id").delete(Employeectrl.deleteEmployee);
router.route("/update/:id").put(Employeectrl.updateEmployee);

module.exports = router;

