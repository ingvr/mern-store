import express from "express";
import bodyParser from "body-parser";

import { categories, products } from "./db";

import router from "./routes";

const app = express();

const mongoose = require("mongoose");
const dev_db_url =
  "mongodb://ingvr:TxlmlvDyMhkMwZx7@cluster0-jsqbt.mongodb.net/test-store";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
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
