const express = require("express");
const route = express();
const { User, Todos } = require("../db");
route.use(express.json());
const jwt = require("jsonwebtoken");
const zod = require("zod");

route.get("/", async (req, res) => {
  const response = await Todos.find({});
  res.json(response);
});

route.listen(3000);
