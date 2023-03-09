import { FC, MouseEventHandler } from "react";
import { calcResult } from "../redux/slices/calculatorSlice";
import {
  useReturnClasses,
  useDnD,
  useTheme,
  useDblClick,
  useAppDispatch,
} from "../utils/hooks";
import { useClick } from "../utils/hooks/useClick";
import { IRuntimeComp } from "../utils/types";
import ControlButton from "./ControlButton";

interface IProps {
  isShadow?: boolean;
  runtime?: boolean;
}

const equal: IRuntimeComp = {
  id: Math.ceil(Math.random() * 100000),
  type: "equal",
};

const Equal: FC<IProps> = ({ isShadow, runtime }) => {
  const { handlers, onDragStart } = useDnD();
  const theme = useTheme() === "constructor";
  const dblClickHandler = useDblClick();
  const clickHandler = useClick();
  const { isInClass, isShadowClass, isInRuntime, themeClass } =
    useReturnClasses(equal, runtime, isShadow);

  return (
    <div
      onDoubleClick={theme ? (e) => dblClickHandler(e, equal) : () => {}}
      draggable={theme}
      className={`component equal-div ${isInRuntime} ${isShadowClass} ${isInClass} ${themeClass} `}
      onDragStart={(e) => onDragStart(e, equal)}
      {...handlers}
    >
      <ControlButton
        clickHandler={clickHandler}
        value={"="}
        style={{
          padding: "1.5rem",
          fontWeight: "500",
          background: "#5D5FEF",
          color: "white",
          borderRadius: "6px",
        }}
      />
    </div>
  );
};

export default Equal;
