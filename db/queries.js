const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

async function insertItem(item) {
  await pool.query("INSERT INTO items (item) VALUES ($1)", [item]);
}
module.exports = {
  getAllItems,
};
