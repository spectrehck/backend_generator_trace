"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ItemsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query("select * from items", function (err, rows, fields) {
                if (err)
                    throw err;
                console.log("El resultado es: ", rows[0]);
                res.json(rows);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = `SELECT * FROM items WHERE item_id = ${req.params.id}`;
            const query = database_1.default.query(items, (err, result) => {
                if (err)
                    throw err;
                res.json(result);
                console.log(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query("INSERT INTO items set ?", [
                req.body
            ]);
            res.json({ message: "item Saved" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const olditem = req.body;
            yield database_1.default.query("UPDATE items set ? WHERE item_id = ?", [
                req.body,
                id
            ]);
            res.json({ message: "The game was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM items WHERE item_id = ?", [id]);
            res.json({ message: "The item was deleted" });
        });
    }
}
const itemsController = new ItemsController();
exports.default = itemsController;
