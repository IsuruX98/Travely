const router = require("express").Router();
const Refundctrl = require("../controllers/RefundCtrl")

router.route("/add").post(Refundctrl.addRefund);
router.route("/").get(Refundctrl.getAllRefunds);
router.route("/get/:id").get(Refundctrl.getOneRefund);
router.route("/delete/:id").delete(Refundctrl.deleteRefund);
router.route("/update/:id").put(Refundctrl.updateRefund);

module.exports = router;