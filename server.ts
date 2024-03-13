import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { productRouter } from "./routes/productRoutes";


dotenv.config();

export const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/product",productRouter);

 app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

