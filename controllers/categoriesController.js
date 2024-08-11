const db = require("../db/queries");

async function createCategory(req, res) {
  db.insertCategory(req.body);
  res.send(`Category: ${req.body.name}`);
}

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  console.log("categories: ", categories);
  res.render("categories", { categories });
}

module.exports = { createCategory, getAllCategories };
