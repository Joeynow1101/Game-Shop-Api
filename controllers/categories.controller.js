import { Category } from "../models/models.js";

const getCategories = async (req, res) => {
	const allCategories = await Category.find();
	res.json(allCategories);
}

const findCategory = async (req, res) => {
	const categoryId = req.params.categoryId;
	const singleCategory = await Category.findById(productId);
	res.json(singleCategory);
}

const postCategory = async (req, res) => {
	// const { name } = {
	// 	...req.body,
	// };
	const newCategory = new Category({
		name: req.body.name,
	});
	const result = await newCategory.save();
	res.json(result);
}

const updateCategory = async (req, res) => {
    const categoryId = req.params.categoryId;
    const data = req.body
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, data, {returnDocument: 'after'})
    res.json(updatedCategory)
}

const deleteCategory = async (req, res) => {
    const categoryId = req.params.categoryId;
    try {
        const deletedCategory = await Category.findByIdAndDelete(categoryId)
        if (deletedCategory) {
            res.json({success: true, message:"Hooray, deleted"})
        } else {
            res.json({success: false, message:"No category with this ID"})
        }
    } catch {
        res.json({success: false, message:"Delete didn't work"})
    }
}

export {getCategories, findCategory, postCategory, updateCategory, deleteCategory}