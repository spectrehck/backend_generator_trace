var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoriesRoutes = require('./routes/categoriesRoutes');
var modelsRoutes = require('./routes/modelsRoutes');
var personsRoutes = require('./routes/personsRoutes');
var transactionsRoutes = require('./routes/transactionsRoutes');
var itemsRoutes = require('./routes/itemsRoutes');
var clientsRoutes = require("./routes/clientsRoutes");
var ordersRoutes = require("./routes/ordersRoutes");
var providersRoutes = require("./routes/providersRoutes");
var shipmentsRoutes = require("./routes/shipmentsRoutes");


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/items", itemsRoutes.default);
app.use("/api/categories", categoriesRoutes.default);
app.use("/api/clients", clientsRoutes.default);
app.use("/api/models", modelsRoutes.default);
app.use("/api/persons", personsRoutes.default);
app.use("/api/transactions", transactionsRoutes.default);
app.use("/api/orders", ordersRoutes.default);
app.use("/api/providers", providersRoutes.default);
app.use("/api/shipments", shipmentsRoutes.default);

module.exports = app;