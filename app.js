import express from "express";
import path from "path";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";

import { DATABASE_URI } from "./config";

import router from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.use(passport.initialize());
require("./config/passport")(passport);

mongoose.connect(DATABASE_URI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
