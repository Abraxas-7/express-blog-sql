const express = require("express");
const router = express.Router();

const { index } = require("../controllers/tagController");
//Rotte

// Index - Read all
router.get("/", index);

//export router
module.exports = router;
