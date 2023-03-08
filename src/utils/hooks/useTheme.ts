import { selectTheme } from "../../redux/slices/themeSlice";
import { useAppSelector } from "../hooks";

// Посчитал, что нужно вынести, ведь иначе будет 2 импорта вместо одного.
export const useTheme = () => {
  return useAppSelector(selectTheme);
};
