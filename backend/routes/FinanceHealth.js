const router = require("express").Router();
const Financectrl = require("../controllers/FinanceHCtrl")

router.route("/add").post(Financectrl.addRecord);
router.route("/").get(Financectrl.getAllRecords);
router.route("/get/:id").get(Financectrl.getOneRecord);
router.route("/delete/:id").delete(Financectrl.deleteRecord);
router.route("/update/:id").put(Financectrl.updateRecord);

module.exports = router;

