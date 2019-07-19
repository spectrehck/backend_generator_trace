"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordersController_1 = __importDefault(require("../controllers/ordersController"));
class OrderRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", ordersController_1.default.list);
        this.router.get("/:id", ordersController_1.default.getOne);
        this.router.post("/", ordersController_1.default.create);
        this.router.put("/:id", ordersController_1.default.update);
        this.router.delete("/:id", ordersController_1.default.delete);
    }
}
exports.default = new OrderRoutes().router;
