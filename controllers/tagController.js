const posts = require("../models/posts");
const CustomError = require("../classes/CustomError");

const tags = [...new Set(posts.map((item) => item.tags).flat())];

function index(req, res) {
  const response = {
    totalCount: tags.length,
    data: [...tags],
  };
  res.json(response);
}

module.exports = { index };
