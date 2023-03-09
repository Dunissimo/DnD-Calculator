import { selectComponents } from "../../redux/slices/componentsSlice";
import { useAppSelector } from "../hooks";

export const useComponents = () => {
  return useAppSelector(selectComponents);
};
