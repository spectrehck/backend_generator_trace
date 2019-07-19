"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionsController_1 = __importDefault(require("../controllers/transactionsController"));
class TransactionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", transactionsController_1.default.list);
        this.router.get("/:id", transactionsController_1.default.getOne);
        this.router.post("/", transactionsController_1.default.create);
        this.router.put("/:id", transactionsController_1.default.update);
        this.router.delete("/:id", transactionsController_1.default.delete);
    }
}
exports.default = new TransactionRoutes().router;
