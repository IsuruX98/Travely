const router = require("express").Router();
const Salaryctrl = require("../controllers/SalaryCtrl")

router.route("/add").post(Salaryctrl.addSalary);
router.route("/").get(Salaryctrl.getAllSalary);
router.route("/get/:id").get(Salaryctrl.getOneSalary);
router.route("/delete/:id").delete(Salaryctrl.deleteSalary);
router.route("/update/:id").put(Salaryctrl.updateSalary);

module.exports = router;

