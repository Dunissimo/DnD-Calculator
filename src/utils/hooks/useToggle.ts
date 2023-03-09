import { MouseEventHandler } from "react";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { useAppDispatch } from "../hooks";

export const useToggle = () => {
  const dispatch = useAppDispatch();
  const setActive = (active: string) => {
    dispatch(toggleTheme(active));
  };

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.dataset.type) {
      setActive(e.currentTarget.dataset.type);
    }
  };

  return clickHandler;
};
