"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personsController_1 = __importDefault(require("../controllers/personsController"));
class PersonsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", personsController_1.default.list);
        this.router.get("/:id", personsController_1.default.getOne);
        this.router.post("/", personsController_1.default.create);
        this.router.put("/:id", personsController_1.default.update);
        this.router.delete("/:id", personsController_1.default.delete);
    }
}
exports.default = new PersonsRoutes().router;
