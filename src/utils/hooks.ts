import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";

import { useDblClick } from "./hooks/useDblClick";
import { useDnD } from "./hooks/useDnD";
import { useReturnClasses } from "./hooks/useReturnClasses";
import { useTheme } from "./hooks/useTheme";

export { useDblClick, useDnD, useReturnClasses, useTheme };
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
