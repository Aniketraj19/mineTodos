const express = require("express");
const route = express();
const { User, Todos } = require("../db");
route.use(express.json());
const jwt = require("jsonwebtoken");
const zod = require("zod");
const authMiddleWare = require("../middleware/authMiddleWare");
const jwtPass = "secretPassword";

const UserValid = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6),
});

route.get("/", async (req, res) => {
  const response = await Todos.find({});
  res.json(response);
});

route.post("/signup", async (req, res) => {
  const validity = UserValid.safeParse(req.body);
  if (!validity.success) {
    res.status(411).json({
      msg: "Wrong input sent",
    });
  } else {
    await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json({
      msg: "done",
    });
  }
});

route.post("/signin", async (req, res) => {
  const signin = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (!signin) {
    res.status(404).json({
      msg: "User Not Found",
    });
  } else {
    const token = jwt.sign(req.body.password, jwtPass);
    res.status(200).json({
      msg: "Loggin Successfull",
      token: `your token is this ${token}`,
    });
  }
});

route.listen(3000);
