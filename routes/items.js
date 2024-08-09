var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/new", function (req, res, next) {
  res.render("itemsForm");
});
router.post("/new", async (req, res) => {
  console.log("Item to be saved: ", req.body);
});
router;

module.exports = router;
