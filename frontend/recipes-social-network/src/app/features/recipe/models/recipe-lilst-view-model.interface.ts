import { Ingredient } from "./ingredient.interface";

export interface RecipeListViewModel {
  id: string;
  name: string;
  imagePath?: string;
  readyIn: number;
  averageRaiting: number;
  skillLevel: string;
  description: string;
  method?: string;
  ingredients?: string;
}
