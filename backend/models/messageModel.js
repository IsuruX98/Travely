const mongoose = require('mongoose');

const messageModel = mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
  content: { type: String, trim: true },
  chat: { type: mongoose.Schema.Types.ObjectID, ref: "chat" }
}, {
  timestamps: true
});

const Message = mongoose.model("Message", messageModel);

module.exports = Message;
