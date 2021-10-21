import * as mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        method: { type: String, required: true },
        ingredients: { type: String, required: true },
        url: { type: String },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comments' }]
    },
    { 
        timestamps: true 
    }
);

RecipeSchema.index({ title: 1 }, { unique: true});