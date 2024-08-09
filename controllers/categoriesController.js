const db = require("../db/queries");

async function createCategory(req, res) {
  console.log(res.body);
  res.send("Category: " + res.body);
}

module.exports = { createCategory };
