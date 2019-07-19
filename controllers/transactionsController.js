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
class TransactionsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query("select * from transactions", function (err, rows, fields) {
                if (err)
                    throw err;
                console.log("El resultado es: ", rows[0]);
                res.json(rows);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactions = `SELECT * FROM transactions WHERE transaction_id = ${req.params.id}`;
            const query = database_1.default.query(transactions, (err, result) => {
                if (err)
                    throw err;
                console.log(result);
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query("INSERT INTO transactions set ?", [
                req.body
            ]);
            res.json({ message: "transaction Saved" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldtransaction = req.body;
            yield database_1.default.query("UPDATE transactions set ? WHERE transaction_id = ?", [req.body, id]);
            res.json({ message: "The game was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM transactions WHERE transaction_id = ?", [id]);
            res.json({ message: "The transaction was deleted" });
        });
    }
}
const transactionsController = new TransactionsController();
exports.default = transactionsController;
