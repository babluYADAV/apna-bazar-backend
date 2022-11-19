const express = require("express");

const common_route_controller = require("../controllers/commonController");

const common_route = express();

common_route.get("/dataCount", common_route_controller.data_count);

module.exports = common_route;
