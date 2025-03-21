import { ProductModel } from "../product/product.model";
import { IOrder } from "./order.interface";
import { orderModel } from "./Order.model";

const createOrder = async (payload: IOrder) => {


    console.log(payload);
    const {userId, productId, quantity} = payload;
    const product = await ProductModel.findById(productId);
    // console.log(product);
    if(!product){
        throw new Error("Product not found");
    }
    if(product.stock < quantity){
        throw new Error("Stock not available");
    }
    product.stock -= quantity;
    console.log(product);
    await product.save();

    const totalPrice = product.price * quantity;
    const result = await orderModel.create({userId,productId, totalPrice , quantity, status: "pending"});

      return result;
//   const result = await orderModel.create(payload);
};

const getOrder = async () => {
  const result = await orderModel.find();
  return result;
};

const getOrderById = async (id: string) => {
  const result = await orderModel.findById(id);
  return result;
};

const updateOrder = async (id: string, payload: IOrder) => {
  const result = await orderModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteOrder = async (id: string) => {
  const result = await orderModel.findByIdAndDelete(id);
  return result;
};

export const orderServices = {
  createOrder,
  getOrder,
  getOrderById,
  updateOrder,
  deleteOrder
};
