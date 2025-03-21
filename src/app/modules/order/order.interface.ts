export interface IOrder {
    userId: string;
    productId: string;
    quantity: number;
    totalPrice?: number;
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  }
  
