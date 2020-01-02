const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendfile("./static/index.html");
});

router.get("/explanation", (req, res) => {
  res.sendfile("./static/explanation.html");
});

module.exports = router;
