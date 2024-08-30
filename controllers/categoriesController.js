const db = require("../db/queries");
const links = require("../routes/links");

async function createCategory(req, res) {
  db.insertCategory(req.body);

  res.render("categories");
}

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", { categories, links });
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
async function deleteCategory(req, res) {
  db.deleteCategory(req.params.id);
  res.redirect("/categories");
}
module.exports = {
  createCategory,
  getAllCategories,
  updateCategoryGET,
  updateCategoryPOST,
  deleteCategory,
};
