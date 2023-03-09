import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";

import { useDblClick } from "./hooks/useDblClick";
import { useDnD } from "./hooks/useDnD";
import { useReturnClasses } from "./hooks/useReturnClasses";
import { useTheme } from "./hooks/useTheme";
import { useClick } from "./hooks/useClick";
import { useToggle } from "./hooks/useToggle";
import { useCalculator } from "./hooks/useCalculator";
import { useCurrent } from "./hooks/useCurrent";
import { useComponents } from "./hooks/useComponents";

export {
  useDblClick,
  useDnD,
  useReturnClasses,
  useTheme,
  useClick,
  useToggle,
  useCalculator,
  useCurrent,
  useComponents,
};
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
