export class RecipeDTO {
    readonly _id?: string;
    readonly recipeName: string;
    readonly url: string;
    readonly readyIn: number;
    readonly averageRaiting: number;
    readonly skillLevel: string;
    readonly description: string;
    readonly method: string;
    readonly ingredients: string;
}
