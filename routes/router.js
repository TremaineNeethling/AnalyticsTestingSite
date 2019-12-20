const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendfile("./static/index.html");
});

module.exports = router;
