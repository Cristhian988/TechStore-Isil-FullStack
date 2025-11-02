const express = require("express");
const productController = require("../controllers/productsController");

const productRouter = express.Router();

productRouter.get("/", productController.show);

module.exports = productRouter;
