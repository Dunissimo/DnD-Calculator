import { FC } from "react";
import {
  useReturnClasses,
  useDnD,
  useTheme,
  useDblClick,
  useClick,
} from "../utils/hooks";
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
  const { equalClickHandler: clickHandler } = useClick();
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
