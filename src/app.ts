import express, { Application, Request, Response } from "express";

import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";


const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res
  .status(200)
  .json({ sucess: true, message: "Welcome to the Stationary Shop Api" });
});

// unknown route error handle

app.use(globalErrorHandler)
app.use(notFound);

export default app;