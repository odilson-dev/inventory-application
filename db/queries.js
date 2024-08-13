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
  getItemWithId,
  getAllCategories,
};
