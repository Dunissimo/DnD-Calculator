import { FC, MouseEventHandler } from "react";

import runtime from "../assets/eye.svg";
import activeRuntime from "../assets/active-eye.svg";
import constructor from "../assets/selector.svg";
import activeConstructor from "../assets/active-selector.svg";
import { selectTheme, toggleTheme } from "../redux/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

const Switch: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const setActive = (active: string) => {
    dispatch(toggleTheme(active));
  };

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.dataset.type) {
      setActive(e.currentTarget.dataset.type);
    }
  };

  // TODO: улучшить определени выбранного элемента.

  const condition = theme === "runtime";

  return (
    <div className="w-auto p-[1px] flex bg-[#F3F4F6] rounded-md">
      <div
        className={`${condition ? "switch-button-active" : ""} switch-button`}
        onClick={clickHandler}
        data-type="runtime"
      >
        <img src={condition ? activeRuntime : runtime} alt="" />
        <span className="text-sm leading-0">Runtime</span>
      </div>
      <div
        className={`${condition ? "" : "switch-button-active"} switch-button`}
        data-type="constructor"
        onClick={clickHandler}
      >
        <img src={condition ? constructor : activeConstructor} alt="" />
        <span className="text-sm leading-0">Constructor</span>
      </div>
    </div>
  );
};

export default Switch;
