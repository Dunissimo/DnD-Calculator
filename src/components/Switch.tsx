import { FC } from "react";
import { useTheme, useToggle } from "../utils/hooks";

import constructor from "../assets/selector.svg";
import activeConstructor from "../assets/active-selector.svg";
import activeRuntime from "../assets/active-eye.svg";
import runtime from "../assets/eye.svg";

const Switch: FC = () => {
  const theme = useTheme() === "runtime";
  const clickHandler = useToggle();

  return (
    <div className="w-auto p-[1px] flex bg-[#F3F4F6] rounded-md">
      <div
        className={`${theme ? "switch-button-active" : ""} switch-button`}
        onClick={clickHandler}
        data-type="runtime"
      >
        <img src={theme ? activeRuntime : runtime} alt="" />
        <span className="text-sm leading-0">Runtime</span>
      </div>
      <div
        className={`${theme ? "" : "switch-button-active"} switch-button`}
        data-type="constructor"
        onClick={clickHandler}
      >
        <img src={theme ? constructor : activeConstructor} alt="" />
        <span className="text-sm leading-0">Constructor</span>
      </div>
    </div>
  );
};

export default Switch;
