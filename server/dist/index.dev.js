"use strict";

require("dotenv").config();

var express = require("express");

var app = express();

var cors = require("cors");

var connection = require("./db");

var userRoutes = require("./routes/users");

var authRoutes = require("./routes/auth"); // database connection


connection(); // middlewares

app.use(express.json());
app.use(cors()); // routes

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
var port = process.env.PORT || 8080;
app.listen(port, console.log("Listening on port ".concat(port, "...")));
//# sourceMappingURL=index.dev.js.map
