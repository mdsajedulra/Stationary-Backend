import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (payload: IProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};
const getProduct = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSpecificProduct = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};


const updateProduct = async (id: string, payload: IProduct) => {
    console.log(id, payload);
  const result = await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};


export const productServices = {
  createProduct,
  getProduct,
  getSpecificProduct,
  deleteProduct,
  updateProduct
};
