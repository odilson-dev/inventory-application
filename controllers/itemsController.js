const db = require("../db/queries");

async function createItemsPOST(req, res) {
  db.insertItem(req.body);
  res.send(`Item: ${req.body}`);
}

async function createItemsGET(req, res) {
  const categories = await db.getAllCategories();
  res.render("itemsForm", { categories });
}

async function getItems(req, res) {
  const items = await db.getAllItems();
  console.log("items: ", items);
  res.send("items: " + items.map((user) => user.username).join(", "));
}

module.exports = { getItems, createItemsGET, createItemsPOST };
