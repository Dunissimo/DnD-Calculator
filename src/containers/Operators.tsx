import { FC } from "react";
import ControlButton from "../components/ControlButton";
import {
  useReturnClasses,
  useDnD,
  useTheme,
  useDblClick,
} from "../utils/hooks";
import { useClick } from "../utils/hooks/useClick";
import { IRuntimeComp } from "../utils/types";

interface IProps {
  isShadow?: boolean;
  runtime?: boolean;
}

const operators: IRuntimeComp = {
  id: Math.ceil(Math.random() * 100000),
  type: "operators",
};

const Operators: FC<IProps> = ({ isShadow, runtime }) => {
  const { handlers, onDragStart } = useDnD();
  const theme = useTheme() === "constructor";
  const dblClickHandler = useDblClick();
  const { operatorClickHandler: clickHandler } = useClick();
  const { isInClass, isShadowClass, isInRuntime, themeClass } =
    useReturnClasses(operators, runtime, isShadow);

  return (
    <div
      onDoubleClick={theme ? (e) => dblClickHandler(e, operators) : () => {}}
      draggable={theme}
      className={`component operators-div ${isInRuntime} ${isShadowClass} ${isInClass} ${themeClass}`}
      onDragStart={(e) => onDragStart(e, operators)}
      {...handlers}
    >
      <ControlButton value={"/"} clickHandler={clickHandler} />
      <ControlButton value={"x"} clickHandler={clickHandler} />
      <ControlButton value={"-"} clickHandler={clickHandler} />
      <ControlButton value={"+"} clickHandler={clickHandler} />
    </div>
  );
};

export default Operators;
