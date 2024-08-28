var express = require("express");
var router = express.Router();

const links = require("./links");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Inventory Application", links });
});

module.exports = router;
