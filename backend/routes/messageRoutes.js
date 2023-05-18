const express =require ('express');
const { sendMessage,allMessages } = require('../controllers/messageControlers');
const {protect} = require('../middleware/verifyToken')

const router =express.Router();

router.route ('/').post(protect,sendMessage);
router.route('/:chatId').get(protect,allMessages)


module.exports = router;