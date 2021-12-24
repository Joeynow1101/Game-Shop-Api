import { BasicProduct } from "../models/models.js";

const getProducts = async (req, res) => {
	const allProducts = await BasicProduct.find();
	res.json(allProducts);
}

const findProduct = async (req, res) => {
	const productId = req.params.productId;
	const singleProduct = await BasicProduct.findById(productId);
	res.json(singleProduct);
}

const postProduct = async (req, res) => {
	// const { name, price, isDecorated, isVegan, tags, category, contactMail } = {
	// 	...req.body,
	// };
	const newBasicProduct = new BasicProduct({
		name: req.body.name,
		price: req.body.price,
		isDecorated: req.body.isDecorated,
		isVegan: req.body.isVegan,
		tags: req.body.tags,
		category: req.body.category,
		contactMail: req.body.contactMail,
	});
	const result = await newBasicProduct.save();
	res.json(result);
}

const updateProduct = async (req, res) => {
    const productId = req.params.productId;
    const data = req.body
    const updatedProduct = await BasicProduct.findByIdAndUpdate(productId, data, {returnDocument: 'after'})
    res.json(updatedProduct)
}

const deleteProduct = async (req, res) => {
    const productId = req.params.productId;
    try {
        const deletedProduct = await BasicProduct.findByIdAndDelete(productId)
        if (deletedProduct) {
            res.json({success: true, message:"Hooray, deleted"})
        } else {
            res.json({success: false, message:"No product with this ID"})
        }
    } catch {
        res.json({success: false, message:"Delete didn't work"})
    }
}

export {getProducts, findProduct, postProduct, updateProduct, deleteProduct}