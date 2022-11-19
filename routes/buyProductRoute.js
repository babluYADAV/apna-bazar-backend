const express = require("express");

const buy_product_controller = require("../controllers/buyProductController");

const buy_product_route = express();

buy_product_route.post("/buyProduct", buy_product_controller.buy_product);

module.exports = buy_product_route;
