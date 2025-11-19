import express from 'express';
const productRouter = express.Router();
import { allProducts } from "../controller/product_controller.js";


productRouter.route('/products').get(allProducts);
    
export default productRouter;