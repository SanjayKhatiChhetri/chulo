const express = require("express");
const {
  getCartController,
  postCartController,
} = require("../controller/cartController");
const data = require("../data/nepali_dishes");
const router = express.Router();

router.get("/", getCartController);

router.post("/", postCartController);

module.exports = router;
