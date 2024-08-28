var express = require("express");
var router = express.Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Inventory Application", links });
});

module.exports = router;
