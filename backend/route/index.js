const express = require("express");
const route = express();
const { User, Todos } = require("../db");
route.use(express.json());
const jwt = require("jsonwebtoken");
const zod = require("zod");

const UserValid = zod.object({
  username: zod.string(),
  password: zod.string().min(6),
});

route.get("/", async (req, res) => {
  const response = await Todos.find({});
  res.json(response);
});

route.post("/signup", async (req, res) => {
  const validity = UserValid.safeParse(req.body);
});

route.listen(3000);
