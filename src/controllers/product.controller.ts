import { Request, Response } from "express";
import { IProduct } from "../model/product.model";
import productService from "../services/product.service";

// Get all todos
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const todos = await productService.getAll();
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get todo by id
const getProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const todo = await productService.getById(req.params.id);
    if (!todo) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Add todo
const addProduct = async (req: Request<{}, IProduct>, res: Response) => {
  const { task, productPrice } = req.body;
  try {
    const newProduct = await productService.add({
      task,
      productPrice,
    });
    if (!newProduct) {
      res.status(500).json({ message: "Unable to add Product" });
      return;
    }
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update todo by id
const updateProductById = async (
  req: Request<{ id: string }, Partial<IProduct>>,
  res: Response
) => {
  const { task, productPrice } = req.body;
  try {
    const updatedTodo = await productService.update(req.params.id, {
      task,
      productPrice,
    });
    if (!updatedTodo) {
      res.status(500).json({ message: "Unable to add todo!" });
      return;
    }
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete todo by id
const deleteTodoById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const deletedTodo = await productService.remove(req.params.id);
    if (!deletedTodo) {
      res.status(500).json({ message: "Unable to delete product!" });
      return;
    }
    res.status(200).json(deletedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteTodoById,
};
