const express = require("express");
const router = express.Router();
const users = require("../users/users");

router.get("/", (req, res) => {
  res.send("Test function");
});

module.exports = router;
