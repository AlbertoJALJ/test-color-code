import ColorsModel from "./colors.model";

interface IOhmValueCalculator {
  calculateOhmValue(
    bandAColor: string,
    bandBColor: string,
    bandCColor: string,
    bandDColor: string
  ): Promise<{ value: number | null; tolerance: number | null }>;
}

export class OhmValueCalculator implements IOhmValueCalculator {
  async calculateOhmValue(
    bandAColor: string,
    bandBColor: string,
    bandCColor: string,
    bandDColor: string
  ) {
    try {
      const colorA = await ColorsModel.findOne({ color: bandAColor });
      const colorB = await ColorsModel.findOne({ color: bandBColor });
      const colorC = await ColorsModel.findOne({ color: bandCColor });
      const colorD = await ColorsModel.findOne({ color: bandDColor });
      console.log(colorA, colorB, colorC, colorD);

      if (
        (colorA?.value === undefined || colorA.value === null) ||
        (colorB?.value === undefined || colorB.value === null) ||
        (colorC?.value === undefined || colorC.value === null) ||
        (colorD?.value === undefined || colorD.value === null)
      ) {
        return { value: null, tolerance: null };
      }

      const significantFigures = colorA.value * 10 + colorB.value;
      const multiplier = 10 ** colorC.value;
      const tolerance = colorD.tolerance;
      console.log(tolerance);
      console.log(significantFigures * multiplier);

      return { value: significantFigures * multiplier, tolerance };
    } catch (error) {
      console.error("Error calculating ohm value:", error);
      return { value: null, tolerance: null };
    }
  }
}
