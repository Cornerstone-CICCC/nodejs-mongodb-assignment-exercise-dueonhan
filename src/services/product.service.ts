import { IProduct, Product } from "../model/product.model";

// get all product
const getAll = async () => {
  return await Product.find();
};

const getById = async (id: string) => {
  return await Product.findById(id);
};

const add = async (newProduct: Partial<IProduct>) => {
  return await Product.create(newProduct);
};

const update = async (id: string, data: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
  });
};

const remove = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export default {
  getAll,
  getById,
  add,
  update,
  remove,
};
