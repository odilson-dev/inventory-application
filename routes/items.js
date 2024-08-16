var express = require("express");
var router = express.Router();
var itemsController = require("../controllers/itemsController");

/* GET home page. */
router.get("/", itemsController.getItems);
router.get("/new", itemsController.createItemsGET);
router.get("/:id/edit", itemsController.updateItemGET);
router.post("/:id", itemsController.updateItemPOST);
router.post("/:id/delete", itemsController.deleteItem);

router.post("/new", itemsController.createItemsPOST);

module.exports = router;
