
export interface RecipeDto {
  _id?: string;
  recipeName: string;
  url?: string;
  readyIn: number;
  averageRaiting: number;
  skillLevel: string;
  description: string;
  method?: string;
  ingredients?: string;
}
