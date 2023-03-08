import { deleteComponent } from "../../redux/slices/componentsSlice";
import { useAppDispatch } from "../hooks";
import { IRuntimeComp } from "../types";

export const useDblClick = () => {
  const dispatch = useAppDispatch();
  const dblClickHandler = (e: MouseEvent, item: IRuntimeComp) => {
    dispatch(deleteComponent(item));
  };

  return dblClickHandler;
};
