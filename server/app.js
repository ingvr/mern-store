import express from "express";
import bodyParser from "body-parser";

import { categories, products } from "./db";
import { DATABASE_URI } from "./config";

import router from "./routes";

const app = express();

const mongoose = require("mongoose");
mongoose.connect(DATABASE_URI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
