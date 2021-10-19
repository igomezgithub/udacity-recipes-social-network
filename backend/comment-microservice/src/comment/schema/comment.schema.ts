import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema(
    {
        textComment: { type: String, required: true },
        aliasUser: { type: String, required: true },
        rate: { type: String, required: true },
        commentDate: { type: Date, required: true }
    }
);