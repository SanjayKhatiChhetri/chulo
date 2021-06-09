const express = require("express");
const {
  khanaIndex,
  khanaDescription,
} = require("../controller/khanaConroller");
const data = require("../data/nepali_dishes");
const router = express.Router();

router.get("/", khanaIndex);

router.get("/:id", khanaDescription);

module.exports = router;
