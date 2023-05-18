const express =require("express");
const {accessChat,fetchChats } = require("../controllers/chatControllers");
const {protect} = require("../middleware/verifyToken")

const router = express.Router();

router.route('/').post(protect,accessChat);
router.route('/').get(protect,fetchChats);

module.exports = router;

