import { MouseEventHandler } from "react";
import {
  addOperator,
  addValue,
  calcResult,
} from "../../redux/slices/calculatorSlice";
import { useAppDispatch } from "../hooks";

export const useClick = () => {
  const dispatch = useAppDispatch();

  const operatorClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.dataset.number) {
      dispatch(addOperator(e.currentTarget.dataset.number));
    }
  };

  const numberClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.dataset.number) {
      dispatch(addValue(e.currentTarget.dataset.number));
    }
  };

  const equalClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(calcResult());
  };

  return { operatorClickHandler, numberClickHandler, equalClickHandler };
};
