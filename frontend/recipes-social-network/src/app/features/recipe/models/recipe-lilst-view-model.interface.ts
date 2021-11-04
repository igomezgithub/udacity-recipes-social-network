import { Ingredient } from "./ingredient.interface";

export interface RecipeListViewModel {
  name: string;
  imagePath?: string;
  readyIn: number;
  averageRaiting: number;
  skillLevel: string;
  description: string;
  method?: string;
  ingredients?: string;
}
