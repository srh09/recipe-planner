import { IMeasurement } from "./measurements"

export class Ingredient {
  constructor(public name: string, public quantity: number, public unit?: string, public preparationMethod?: string) {}
}
