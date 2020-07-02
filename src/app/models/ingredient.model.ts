import { IMeasurement } from "./measurements"

export class Ingredient {
  constructor(public name: string, public quantity: number, public units?: string, public preparationMethod?: string) {}
}
