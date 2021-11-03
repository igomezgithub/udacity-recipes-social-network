
export interface RecipeDto {
  recipeName: string;
  imagePath?: string;
  readyIn: number;
  averageRaiting: number;
  skillLevel: string;
  description: string;
  method?: string;
  ingredients?: string;
}
