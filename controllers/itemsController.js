const db = require("../db/queries");
const links = require("../routes/links");

async function createItemsPOST(req, res) {
  db.insertItem(req.body);
  const items = await db.getAllItems();
  const categories = await db.getAllCategories();

  res.render("items", { items, categories, links });
}

async function createItemsGET(req, res) {
  const categories = await db.getAllCategories();
  res.render("itemsForm", { categories });
}

async function getItems(req, res) {
  const items = await db.getAllItems();
  const categories = await db.getAllCategories();

  res.render("items", { items, categories, links });
}

async function updateItemGET(req, res) {
  const { id } = req.params;

  const item = await db.getItemWithId(id);
  const categories = await db.getAllCategories();

  res.render("itemsUpdate", { item, categories });
}

async function updateItemPOST(req, res) {
  db.updateItem(req.body);

  res.redirect("/items");
}

async function deleteItem(req, res) {
  db.deleteItem(req.params.id);
  res.redirect("/items");
}
module.exports = {
  getItems,
  createItemsGET,
  createItemsPOST,
  updateItemGET,
  updateItemPOST,
  deleteItem,
};
