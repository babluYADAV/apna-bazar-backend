const express = require("express");

const cart_controller = require("../controllers/cartController");

const cart_route = express();

cart_route.get("/cart", cart_controller.add_to_cart);

module.exports = cart_route;
