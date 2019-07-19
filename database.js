"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mysql = require("mysql");
//local mysql db connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "traceability"
});
connection.connect(function(err) {
    if (err)
        throw err;
});
exports.default = connection;