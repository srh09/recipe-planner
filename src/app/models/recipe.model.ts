import { Ingredient } from "./ingredient.model"

export class Recipe {
  constructor(
    public name: string,
    public servings: string,
    public description?: string,
    public instructions?: string,
    public notes?: string,
    public ingredients?: (Ingredient | Recipe)[],
    public imagePath?: string,
    public amount?: number
  ) {}
}
