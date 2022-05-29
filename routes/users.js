import express from "express";

const router = express.Router();

const users = [
  {
    Firstname: "Osama",
    Lastname: "Ahmed",
    age: 23,
  },
  {
    Firstname: "Fahim",
    Lastname: "Ahmed",
    age: 27,
  },
];

router.get("/", (req, resp) => {
  resp.send(users);
});

export default router;
