import { selectCalculator } from "../../redux/slices/calculatorSlice";
import { useAppSelector } from "../hooks";

export const useCalculator = () => {
  return useAppSelector(selectCalculator);
};
