import { IMeasurement } from "./measurements"

export class Ingredient {
  constructor(
    public name: string,
    public quantity: number,
    public unit?: IMeasurement,
    public preparationMethod?: string
  ) {}
}
