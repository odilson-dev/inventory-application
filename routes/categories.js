var express = require("express");
var router = express.Router();
var categoriesController = require("../controllers/categoriesController");

/* GET home page. */
router.get("/new", function (req, res, next) {
  res.render("categoriesForm");
});
router.post("/new", categoriesController.createCategory);
router;

module.exports = router;
