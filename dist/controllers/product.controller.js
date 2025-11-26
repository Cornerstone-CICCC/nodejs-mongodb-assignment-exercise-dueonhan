"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("../services/product.service"));
// Get all todos
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield product_service_1.default.getAll();
        res.status(200).json(todos);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});
// Get todo by id
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield product_service_1.default.getById(req.params.id);
        if (!todo) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.status(200).json(todo);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});
// Add todo
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task, productPrice } = req.body;
    try {
        const newProduct = yield product_service_1.default.add({
            task,
            productPrice,
        });
        if (!newProduct) {
            res.status(500).json({ message: "Unable to add Product" });
            return;
        }
        res.status(201).json(newProduct);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});
// Update todo by id
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task, productPrice } = req.body;
    try {
        const updatedTodo = yield product_service_1.default.update(req.params.id, {
            task,
            productPrice,
        });
        if (!updatedTodo) {
            res.status(500).json({ message: "Unable to add todo!" });
            return;
        }
        res.status(200).json(updatedTodo);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});
// Delete todo by id
const deleteTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTodo = yield product_service_1.default.remove(req.params.id);
        if (!deletedTodo) {
            res.status(500).json({ message: "Unable to delete product!" });
            return;
        }
        res.status(200).json(deletedTodo);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});
exports.default = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteTodoById,
};
