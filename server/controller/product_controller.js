import Product from "../models/product.model.js";
import Cart from "../models/cart.model.js";

const allProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const showcasedProducts = async (req, res) => {
  try {
    const showcasedProducts = await Product.find({ isShowcased: true });
    res.status(200).json(showcasedProducts);
  } catch (error) {
    console.error("Error fetching showcased products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// const cartProducts = async (req,res) => {
//     try {
//         const cartProducts = await Product.find({isInCart: true});
//         res.status(200).json(cartProducts);
//     } catch (error) {
//         console.error("Error fetching cart products:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// }

const addProductToCart = async (req, res) => {
  try {
    const { userId, productId, weight, quantity } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      cart.items.push({
        product: productId,
        price: product.discountPrice,
        weight,
        quantity: quantity || 1,
      });
    }

    product.isInCart = true;
    await product.save();
    await cart.save();
    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const cartProducts = async (req, res) => {
  try {
    const { userId } = req.query;
    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    if (!cart) {
      return res.status(200).json({ items: [] });
    }
    res.status(200).json(cart.items);
  } catch (error) {
    console.error("Error fetching cart products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { allProducts, showcasedProducts, cartProducts, addProductToCart };
