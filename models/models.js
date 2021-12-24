import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    isDecorated: Boolean,
    isVegan: Boolean,
    tags: Array,
    category: {
        required: true,
        type: String
    },
    contactMail: String
})

const categorySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    }
})

const BasicProduct = mongoose.model("BasicProduct", productSchema)
const Category = mongoose.model("Category", categorySchema)



export {BasicProduct, Category}