import * as mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema(
    {
        recipeName: { type: String, required: true },
        url: { type: String },
        readyIn: { type: Number },
        averageRaiting: { type: Number },
        skillLevel: { type: String },
        description: { type: String },
        method: { type: String, required: true },
        ingredients: { type: String, required: true },
       
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comments' }]
    },
    { 
        timestamps: true 
    }
);

RecipeSchema.index({ recipeName: 1 }, { unique: true});