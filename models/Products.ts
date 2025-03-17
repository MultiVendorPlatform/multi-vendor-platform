import mongoose, {model, Model, Schema} from "mongoose";
import { TypeProductModel } from "../types/models";
type ProductModel = Model<TypeProductModel>;

const schema = new Schema < TypeProductModel, ProductModel >({
    featured: {
        type: String,
        default: false
    },
    name: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    additionnal: {
        type: String,
        required: false,
    },
    specification: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true
    },
    subCategories: [{
        type: String,
        required: true,
    }],
    collections: [{
        type: String,
        required: true,
    }],
    tags: [{
        type: String,
        required: true
    }],
    brand: {
        type: String,
        required: true,    
    },
    reviews: [{
        type: String,
        required: false,
    }],
    store : {
        type: String,
        required: true,
    },
    productVariants: [{
        type: String,
        required: true,
    }],
    images: [{
        url: {
            type: String,
            required: true,
        },
    }],
    price : {
        type: Number,
        default: 0,
    },
    discount: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        enum: ["draft", "publish", "archive"],
        default: "draft"
    },
    seoTitle: {
        type: String,
        required: false,
    },
    seoDescription: {
        type: String,
        required: false,
    },
    seoSlug: {
        type: String,
        required: false,
    },
    weight: {
        type: Number,
        default: "kg",
    },
    inventory : {
        type: String,
        enum: ["instock", "outstock"],
        default: "instock",
    },
    sku: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    views : {
        type: Number,
        default: 0,
    },
    {
        timestamps: true
    }

});

const product = mongoose.models.Product || model <TypeProductModel, ProductModel>("Product", schema);   

export default product;