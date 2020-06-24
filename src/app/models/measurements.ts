type MEASUREMENTS_US_VOLUME = "teaspoon" | "tablespoon" | "cup"
type MEASUREMENTS_METRIC_VOLUME = "litres" | "millilitres"
type MEASUREMENTS_METRIC_WEIGHT = "kilograms" | "grams"

export interface IMeasurement {
  param: MEASUREMENTS_US_VOLUME | MEASUREMENTS_METRIC_VOLUME | MEASUREMENTS_METRIC_WEIGHT
}
