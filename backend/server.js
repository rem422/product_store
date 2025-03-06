import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"; //Cross-origin resource sharing middleware

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); //allows us to accept data in the req.body
app.use(cors()); //Cross-origin resource sharing middleware

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
});
