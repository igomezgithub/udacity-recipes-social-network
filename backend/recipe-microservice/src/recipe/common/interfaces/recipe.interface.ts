import { IComment } from "./comment.interface";

export interface IRecipe extends Document {
    title: string;
    method: string;
    ingredients: string;
    url: string;
    comments: IComment[];
}