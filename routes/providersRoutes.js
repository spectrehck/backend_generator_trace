"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const providersController_1 = __importDefault(require("../controllers/providersController"));
class ProviderRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", providersController_1.default.list);
        this.router.get("/:id", providersController_1.default.getOne);
        this.router.post("/", providersController_1.default.create);
        this.router.put("/:id", providersController_1.default.update);
        this.router.delete("/:id", providersController_1.default.delete);
    }
}
exports.default = new ProviderRoutes().router;
