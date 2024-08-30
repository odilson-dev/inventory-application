var express = require("express");
var router = express.Router();
var categoriesController = require("../controllers/categoriesController");


router.get("/", categoriesController.getAllCategories);
router.get("/new", function (req, res, next) {
  res.render("categoriesForm");
});
router.post("/new", categoriesController.createCategory);

router.get("/:id/edit", categoriesController.updateCategoryGET);
router.post("/:id", categoriesController.updateCategoryPOST);

router.post("/:id/delete", categoriesController.deleteCategory);

module.exports = router;
