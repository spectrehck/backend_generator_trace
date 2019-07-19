"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modelsController_1 = __importDefault(require("../controllers/modelsController"));
class ModelRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", modelsController_1.default.list);
        this.router.get("/:id", modelsController_1.default.getOne);
        this.router.post("/", modelsController_1.default.create);
        this.router.put("/:id", modelsController_1.default.update);
        this.router.delete("/:id", modelsController_1.default.delete);
    }
}
exports.default = new ModelRoutes().router;
