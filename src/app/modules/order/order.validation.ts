import { z } from "zod";

export const orderValidationSchema = z.object({
    body: z.object({
        userId: z.string().min(1, "User ID is required"),
        productId: z.string().min(1, "Product ID is required"),
        quantity: z.number().min(1, "Quantity must be at least 1"),
        totalPrice: z.number().min(0, "Total price must be a positive number").optional(),
        status: z.enum(["pending", "processing", "shipped", "delivered", "cancelled"], {
          errorMap: () => ({ message: "Invalid order status" }),
        }),
    })
})