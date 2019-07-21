"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mysql = require("mysql");
//local mysql db connection
var connection = mysql.createConnection({
    host: "34.65.153.111",
    user: "root",
    password: "santacruz12",
    database: "traceability"
});
connection.connect(function(err) {
    if (err)
        throw err;
});
exports.default = connection;