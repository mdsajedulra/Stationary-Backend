import { z } from "zod";

export const ProductValidationSchema = z.object({
  body:z.object({
    name: z.string().min(1, "Product name is required"),
    brand: z.string().min(1, "Brand is required"),
    price: z.number().min(0, "Price must be a positive number").refine(value => value > 0, {
      message: "Price must be greater than zero"
    }),
    model: z.string().min(1, "Model is required"),
    stock: z.number().min(0, "Stock must be a non-negative number").refine(value => value >= 0, {
      message: "Stock must be a non-negative number"
    }),
  }) 
});

