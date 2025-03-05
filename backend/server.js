import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();
//middle-ware - a function that runs before sending response back to the client
app.use(express.json()); //allows us to accept data in the req.body

app.post("/products", async (req, res) => {
  const product = req.body; //user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please fill all fields" });
    }

  const newProduct = Product.create(product); //creates new product

    try {
        // await newProduct.save(); //saves the product to the database
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.listen(3000, () => {
    connectDB();
    console.log("Server is running at http://localhost:3000");
});
