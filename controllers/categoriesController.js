const db = require("../db/queries");

async function createCategory(req, res) {
  db.insertCategory(req.body);
  res.send(`Category: ${req.body.name}`);
}

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categoriesIndex", { categories });
}
async function updateCategoryGET(req, res) {
  const { id } = req.params;

  const category = await db.getCategoryWithId(id);

  res.render("categoriesUpdate", { category });
}

async function updateCategoryPOST(req, res) {
  db.updateCategory(req.body);

  res.redirect("/categories");
}
module.exports = {
  createCategory,
  getAllCategories,
  updateCategoryGET,
  updateCategoryPOST,
};
