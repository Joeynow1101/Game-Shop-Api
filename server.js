import express from "express";
import mongoose from "mongoose";
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
const server = express();
const connectionString =
	"mongodb+srv://testuser:<passwort>@cluster0.ktuwl.mongodb.net/test"; //ändern in Localhost
mongoose.connect(connectionString);
server.use(express.json());

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

server.listen(3000, () => console.log("Shop Backend is up and running"));
