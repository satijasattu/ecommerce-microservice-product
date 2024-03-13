
import * as express from "express"; 
import { getProductDetailsForMongo, getProductDetailsForPostgres } from "../controllers/productControllers";

export const productRouter = express.Router();

productRouter.route("/postgres/:productId").get(getProductDetailsForPostgres);
productRouter.route("/mongo/:productId").get(getProductDetailsForMongo);





