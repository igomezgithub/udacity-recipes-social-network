import { IComment } from "./comment.interface";

export interface IRecipe extends Document {
    _id?: string;
    recipeName: string;
    url: string;
    readyIn: number;
    averageRaiting: number;
    skillLevel: string;
    description: string;
    method: string;
    ingredients: string;
    comments: IComment[];
}
