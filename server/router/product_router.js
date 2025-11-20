import express from 'express';
const productRouter = express.Router();
import { allProducts, cartProducts, showcasedProducts } from "../controller/product_controller.js";


productRouter.route('/products').get(allProducts);
productRouter.route('/products/showcased').get(showcasedProducts);
productRouter.route('/products/cart').get(cartProducts);

export default productRouter;