import express from 'express';
const productRouter = express.Router();
import { allProducts, cartProducts, showcasedProducts, addProductToCart } from "../controller/product_controller.js";


productRouter.route('/products').get(allProducts);
productRouter.route('/products/showcased').get(showcasedProducts);
productRouter.route('/products/cart').get(cartProducts);
productRouter.route('/products/add-to-cart').post(addProductToCart);
// productRouter.route('/products/cartProducts').get(cartProducts);
export default productRouter;