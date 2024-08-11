const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM Categories");
  return rows;
}
async function insertItem(item) {
  await pool.query("INSERT INTO items (item) VALUES ($1)", [item]);
}

async function insertCategory(category) {
  await pool.query(
    "INSERT INTO Categories (name, createdAt, updatedAt) VALUES ($1, $2, $2)",
    [category.name, "NOW()"]
  );
}
module.exports = {
  getAllItems,
  insertItem,
  insertCategory,
  getAllCategories,
};
