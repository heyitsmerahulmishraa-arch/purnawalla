// models/Cart.js
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // ek user ka generally 1 cart hota hai
    },

    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },

        weight: {
          type: String, // example: “100g”, “200g”
          required: false,
        },

        price: {
          type: Number, // price at the time of adding to cart
          required: true,
        },
      },
    ],

    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// 🔥 Auto calculate total amount before saving
cartSchema.pre("save", function (next) {
  this.totalAmount = this.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  next();
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
