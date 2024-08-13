const db = require("../db/queries");

async function createItemsPOST(req, res) {
  db.insertItem(req.body);
  res.redirect("/items");
}

async function createItemsGET(req, res) {
  const categories = await db.getAllCategories();
  res.render("itemsForm", { categories });
}

async function getItems(req, res) {
  const items = await db.getAllItems();

  res.render("itemsIndex", { items });
}

async function updateItemGET(req, res) {
  const { id } = req.params;

  const item = await db.getItemWithId(id);
  const categories = await db.getAllCategories();

  res.render("itemsUpdate", { item, categories });
}
module.exports = { getItems, createItemsGET, createItemsPOST, updateItemGET };
