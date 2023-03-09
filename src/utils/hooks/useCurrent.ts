import { selectCurrent } from "../../redux/slices/currentCompSlice";
import { useAppSelector } from "../hooks";

export const useCurrent = () => {
  return useAppSelector(selectCurrent);
};
