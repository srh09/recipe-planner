import { Ingredient } from "./ingredient.model"

export class Recipe {
  constructor(
    public name: string,
    public servings: number,
    public description?: string,
    public notes?: string,
    public instructions?: string[],
    public ingredients?: (Ingredient | Recipe)[],
    public imagePath?: string,
    public quantity?: number
  ) {}
}
