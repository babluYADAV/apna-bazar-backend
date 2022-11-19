const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoute = require("./routes/userRoute");
const storeRoute = require("./routes/storeRoute");
const categoryRoute = require("./routes/categoryRoute");
const subCategoryRoute = require("./routes/subCategoryRoute");
const productRoute = require("./routes/productRoute");
const commonRoute = require("./routes/commonRoute");
const cartRoute = require("./routes/cartRoute");
const addressRoute = require("./routes/addressRoute");
const buyProductRoute = require("./routes/buyProductRoute");
app.use(cors());
//use as logger
app.use(morgan("dev"));
mongoose
  .connect("mongodb://localhost:27017/apna-bazar", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Database connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle CORS error
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Headers", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api", userRoute);
app.use("/api", storeRoute);
app.use("/api", categoryRoute);
app.use("/api", subCategoryRoute);
app.use("/api", productRoute);
app.use("/api", commonRoute);
app.use("/api", cartRoute);
app.use("/api", addressRoute);
app.use("/api", buyProductRoute);

//for error handling if bad url hit
// app.use((req, res, next) => {
//   const error = new Error("Not found");
//   error.status = 404;
//   next(error);
// });

// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });

module.exports = app;
