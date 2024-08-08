const db = require("../db/queries");

async function getItems(req, res) {
  const items = await db.getAllItems();
  console.log("items: ", items);
  res.send("items: " + items.map((user) => user.username).join(", "));
}

module.exports = { getItems };
