import { SkillLevel } from "./skill-level.enum";

export interface RecipeList {
  recipeName: string;
  readyIn: number;
  averageRaiting: number;
  skillLevel: SkillLevel;
  description: string;
}
