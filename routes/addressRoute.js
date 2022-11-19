const express = require("express");

const address_controller = require("../controllers/addressController");

const address_route = express();
address_route.get("/cart", address_controller.add_address);

module.exports = address_route;
