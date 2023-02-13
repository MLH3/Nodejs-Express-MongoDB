// Importing Modules
const express = require("express");
const router = express.Router();
const user = require("../models/user");

// Routes
// Get All Method
router.get("/", async (req, res) => {
  try {
    console.log("Get Method");
    res.status(200).json(await user.find());
  } catch (err) {
    res.json({ message: err });
  }
});

// Get One Method
router.get("/:userId", async (req, res) => {
  console.log("Get One Method");
  try {
    res.status(200).json(await user.findById(req.params.userId));
  } catch (err) {
    res.json({ message: err });
  }
});

// Post Method
router.post("/", async (req, res) => {
  console.log("Post Method");
  try {
    res.status(200).json(await user.create(req.body));
    console.log("User Created");
  } catch (err) {
    res.json({ message: err });
  }
});

// Update Method
router.patch("/:id", async (req, res) => {
  console.log("Patch Method");
  try {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    res
      .status(200)
      .json(
        await user.findByIdAndUpdate(
          id,
          { firstName, lastName, age },
          { new: true }
        )
      );
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete Method
router.delete("/:id", async (req, res) => {
  console.log("Delete Method");
  try {
    await user.deleteOne({ _id: req.params.id });
    console.log("User Deleted");
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
