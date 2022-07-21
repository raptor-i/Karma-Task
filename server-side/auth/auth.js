const express = require("express");
const router = express.Router();
const mware = require("../middleware/auth");

router.post("/", (req, res) => {
  const { nickname, password } = req.body;
  console.log(nickname + password);
  res.send("test");
});

module.exports = router;
