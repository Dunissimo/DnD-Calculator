import { MouseEventHandler } from "react";
import { addOperator } from "../../redux/slices/calculatorSlice";
import { useAppDispatch } from "../hooks";

export const useClick = () => {
  const dispatch = useAppDispatch();

  const clickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.dataset.number) {
      dispatch(addOperator(e.currentTarget.dataset.number));
    }
  };

  return clickHandler;
};
