import { SkillLevel } from "./skill-level.enum";

export interface RecipeEditViewModel {
  id?: string;
  name: string;
  imagePath?: string;
  readyIn: number;
  averageRaiting?: number;
  skillLevel: SkillLevel;
  description?: string;
  method: string;
  ingredients: string;
}
