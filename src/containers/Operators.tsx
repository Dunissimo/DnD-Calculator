import { FC, MouseEventHandler } from "react";
import ControlButton from "../components/ControlButton";
import { addOperator } from "../redux/slices/calculatorSlice";
import {
  useReturnClasses,
  useDnD,
  useTheme,
  useDblClick,
  useAppDispatch,
} from "../utils/hooks";
import { IRuntimeComp } from "../utils/types";

interface IProps {
  isShadow?: boolean;
  runtime?: boolean;
}

const Operators: FC<IProps> = ({ isShadow, runtime }) => {
  const { handlers, onDragStart } = useDnD();
  const dispatch = useAppDispatch();

  const operators: IRuntimeComp = {
    id: Math.ceil(Math.random() * 100000),
    type: "operators",
  };

  const { isInClass, isShadowClass, isInRuntime, themeClass } =
    useReturnClasses(operators, runtime, isShadow);

  const theme = useTheme() === "constructor";
  const dblClickHandler = useDblClick();

  const clickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.dataset.number) {
      dispatch(addOperator(e.currentTarget.dataset.number));
    }
  };

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
