const express = require("express");

const category_controller = require("../controllers/categoryController");

const category_route = express();

category_route.post("/addCategory", category_controller.add_category);

module.exports = category_route;
