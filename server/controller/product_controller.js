import Product from "../models/product.model.js";

const allProducts = async (req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const showcasedProducts = async (req,res) => {
    try {
        const showcasedProducts = await Product.find({isShowcased: true});
        res.status(200).json(showcasedProducts);
    } catch (error) {
        console.error("Error fetching showcased products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const cartProducts = async (req,res) => {
    try {
        const cartProducts = await Product.find({isInCart: true});
        res.status(200).json(cartProducts);
    } catch (error) {
        console.error("Error fetching cart products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const addProductToCart = async (req,res) => {
    try {
        const { productId } = req.body;
        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        product.isInCart = true;
        await product.save();
        res.status(200).json({message: "Product added to cart successfully"});
    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { allProducts, showcasedProducts, cartProducts, addProductToCart };