"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemsControllers_1 = __importDefault(require("../controllers/itemsControllers"));
class ItemRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", itemsControllers_1.default.list);
        this.router.get("/:id", itemsControllers_1.default.getOne);
        this.router.post("/", itemsControllers_1.default.create);
        this.router.put("/:id", itemsControllers_1.default.update);
        this.router.delete("/:id", itemsControllers_1.default.delete);
    }
}
exports.default = new ItemRoutes().router;
