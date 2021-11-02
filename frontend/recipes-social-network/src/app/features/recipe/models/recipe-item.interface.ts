import { Ingredient } from "./ingredient.interface";
import { SkillLevel } from "./skill-level.enum";

export interface RecipeItem {
  recipeName: string;
  readyIn: number;
  averageRaiting: number;
  skillLevel: SkillLevel;
  description: string;
  imagePath?: string;
  ingredients?: Ingredient[];
}
