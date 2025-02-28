const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://aniketraj19verma:Bm1R6aGA9AkAC2dw@cluster0.vikfe.mongodb.net/TodosMine"
);

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  todos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Todos",
  },
});

const TodoSchema = mongoose.Schema({
  todo: String,
  description: String,
  completed: Boolean,
});

const User = mongoose.model("User", UserSchema);
const Todos = mongoose.model("Todos", TodoSchema);

module.exports = {
  User,
  Todos,
};
