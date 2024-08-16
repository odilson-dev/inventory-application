const pool = require("./pool");

async function getItemWithId(id) {
  const query = {
    // give the query a unique name
    name: "fetch-item",
    text: "SELECT * FROM items WHERE id = $1",
    values: [id],
  };

  const res = await pool.query(query);
  return res.rows[0];
}

async function getCategoryWithId(id) {
  const query = {
    // give the query a unique name
    name: "fetch-category",
    text: "SELECT * FROM categories WHERE id = $1",
    values: [id],
  };

  const res = await pool.query(query);
  return res.rows[0];
}

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM Categories");
  return rows;
}
async function insertItem(item) {
  await pool.query(
    "INSERT INTO items (name, description, price, categoryId, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $5)",
    [item.name, item.description, item.price, item.categoryId, "NOW()"]
  );
}

async function updateItem(item) {
  await pool.query(
    `UPDATE items SET name = $1, description = $2, price = $3, "categoryId" = $4, updatedAt = NOW() WHERE id = $5`,
    [item.name, item.description, item.price, item.categoryId, item.id]
  );
}
async function updateCategory(category) {
  await pool.query(
    `UPDATE Categories SET name = $1, updatedAt = NOW() WHERE id = $2`,
    [category.name, category.id]
  );
}
async function insertCategory(category) {
  await pool.query(
    "INSERT INTO Categories (name, createdAt, updatedAt) VALUES ($1, $2, $2)",
    [category.name, "NOW()"]
  );
}
async function deleteItem(id) {
  await pool.query("DELETE FROM Items WHERE id = $1", [id]);
}

async function deleteCategory(id) {
  await pool.query("DELETE FROM Categories WHERE id = $1", [id]);
}
module.exports = {
  getAllItems,
  insertItem,
  insertCategory,
  getItemWithId,
  getCategoryWithId,
  getAllCategories,
  updateCategory,
  deleteItem,
  deleteCategory,
  updateItem,
};
