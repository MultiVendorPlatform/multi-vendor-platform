import { TypeCategoryModel } from "types/models";
import { Model } from "mongoose"; 
import mongoose, { Schema } from "mongoose";

type CategoryModel = Model <TypeCategoryModel>;

const schema = new Schema<TypeCategoryModel, CategoryModel>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    slug : {
        type: String,
        required: true,
    },
    image : {
        type: String,
        required: true,
    },
    status : {
        type: String,
        enum: ["draft", "publish", "archive"],
        default: "draft",
    },
    user_id: {
        type: String,
        required: true,
    },
    subCategories: [{
        type: String,
        required: true,
    }],
});

const category = mongoose.models.Category || mongoose.model("Category", schema);

export default category;