var express = require("express");
var router = express.Router();
var itemsController = require("../controllers/itemsController");

/* GET home page. */
router.get("/new", itemsController.createItemsGET);
router.post("/new", async (req, res) => {
  console.log("Item to be saved: ", req.body);
});
router;

module.exports = router;
