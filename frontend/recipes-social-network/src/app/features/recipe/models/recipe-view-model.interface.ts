import { Ingredient } from "./ingredient.interface";
import { SkillLevel } from "./skill-level.enum";

export interface RecipeViewModel {
  name: string;
  imagePath?: string;
  readyIn: number;
  averageRaiting: number;
  skillLevel: SkillLevel;
  description: string;
  method?: string;
  ingredients?: string;
}
