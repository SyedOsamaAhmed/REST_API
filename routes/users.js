import express from "express";

import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

router.get("/", (req, resp) => {
  resp.send(users);
});

router.post("/", (req, resp) => {
  const user = req.body;
  const userwithId = {
    ...user,
    id: uuidv4(),
  };
  users.push(userwithId);
  resp.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const userFound = users.find((user) => user.id === id);
  res.send(userFound);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with id:${id} is successfully deleted!`);
});
export default router;
