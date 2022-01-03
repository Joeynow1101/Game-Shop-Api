import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  getProducts,
  findProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.controller.js";
import {
  getCategories,
  findCategory,
  postCategory,
  updateCategory,
  deleteCategory,
} from "./controllers/categories.controller.js";

dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

const server = express();
// const connectionString = "mongodb://localhost:27017/christmas-backend"; //ändern in Localhost
mongoose.connect(connectionString);
server.use(express.json());
server.use(cors());

//Products
server.get("/products", getProducts);
server.get("/products/:productId", findProduct);
server.post("/products", postProduct);
server.put("/products/:productId", updateProduct);
server.delete("/products/:productId", deleteProduct);

//Categories
server.get("/categories", getCategories);
server.get("/categories/:categoryId", findCategory);
server.post("/categories", postCategory);
server.put("/categories/:categoryId", updateCategory);
server.delete("/categories/:categoryId", deleteCategory);

server.listen(4000, () => console.log("Shop Backend is up and running"));
