import { NofFmCalculator } from "./calculators/NofFmCalculator"
import { WaccCalculator } from "./calculators/WaccCalculator"
import { RatiosCalculator } from './calculators/RatiosCalculator';
import { BondCalculator } from "./calculators/BondCalculator";
import { EVACalculator } from './calculators/EvaCalculator';
import { ApalancamientoCalculator } from './calculators/ApalancamientoCalculator';
import { EbitdaCalculator } from './calculators/EbitdaCalculator';


export const CalculatorGrid = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 my-4">
        <NofFmCalculator />
        <WaccCalculator />
        <RatiosCalculator /> 
        <BondCalculator />
        <EVACalculator />
        <ApalancamientoCalculator />
        <EbitdaCalculator />
    </div>
  )
}
