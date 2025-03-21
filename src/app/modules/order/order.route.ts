import { Router } from "express";
import { orderController } from "./order.controller";
import validateRequest from "../../middlewares/validateRequest";
import { orderValidationSchema } from "./order.validation";

const orderRoutes = Router();

orderRoutes.post(
  "/",
  validateRequest(orderValidationSchema),
  orderController.createOrder
);

orderRoutes.get("/", orderController.getOrders);

orderRoutes.get("/:id", orderController.getOrderById);

orderRoutes.put("/:id", orderController.updateOrder);

orderRoutes.delete("/:id", orderController.deleteOrder);

export default orderRoutes;
