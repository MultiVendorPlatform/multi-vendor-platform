import mongoose, { Model, Schema } from 'mongoose';
import { TypeTokenModel } from 'types/models'; 

type TokenModel = Model<TypeTokenModel>;

const schema = new Schema<TypeTokenModel, TokenModel>({
    template: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["draft", "publish", "archive"],
        default: "draft",
    },
    user_id : {
        type: String,
        required: true,
    },
});

const token = mongoose.models.Token || mongoose.model ("Token", schema);

export default token;