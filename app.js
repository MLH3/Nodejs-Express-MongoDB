// Importing Modules
require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3001;

// Parse Json Data
app.use(express.json());

// Connecting to Database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE);

const database = mongoose.connection;
database.on("error", (error) => {
  console.error(error);
});
database.once("connected", () => {
  console.log("Connected to Database");
});

// Route
const userRoute = require("./routes/user");
app.use("/", userRoute);

// Port Listening
app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
