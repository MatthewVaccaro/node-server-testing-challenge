const express = require("express");
const router = express.Router();
const db = require("./helperFunctions");

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "BIG MISTAKE!" });
    }
    const newUser = await db.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const removed = await db.remove(req.params.id);
    res.status(200).json(removed);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
