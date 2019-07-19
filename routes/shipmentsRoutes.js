"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shipmentsController_1 = __importDefault(require("../controllers/shipmentsController"));
class ShipmentRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", shipmentsController_1.default.list);
        this.router.get("/:id", shipmentsController_1.default.getOne);
        this.router.post("/", shipmentsController_1.default.create);
        this.router.put("/:id", shipmentsController_1.default.update);
        this.router.delete("/:id", shipmentsController_1.default.delete);
    }
}
exports.default = new ShipmentRoutes().router;
