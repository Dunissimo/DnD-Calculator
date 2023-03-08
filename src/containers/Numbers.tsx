import { FC, MouseEventHandler } from "react";
import ControlButton from "../components/ControlButton";
import {
  useReturnClasses,
  useDnD,
  useTheme,
  useDblClick,
  useAppDispatch,
} from "../utils/hooks";
import { IRuntimeComp } from "../utils/types";
import { addValue } from "../redux/slices/calculatorSlice";

interface IProps {
  isShadow?: boolean;
  runtime?: boolean;
}
const Numbers: FC<IProps> = ({ isShadow, runtime }) => {
  const { handlers, onDragStart } = useDnD();
  const dispatch = useAppDispatch();
  const numbers: IRuntimeComp = {
    id: Math.ceil(Math.random() * 100000),
    type: "numbers",
  };

  const { isInClass, isShadowClass, isInRuntime, themeClass } =
    useReturnClasses(numbers, runtime, isShadow);

  const theme = useTheme() === "constructor";

  const dblClickHandler = useDblClick();

  const clickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(addValue(e.currentTarget.dataset.number));
  };

  return (
    <div
      onDoubleClick={theme ? (e) => dblClickHandler(e, numbers) : () => {}}
      draggable={theme}
      className={`component numbers-div ${isInRuntime} ${isShadowClass} ${isInClass} ${themeClass}`}
      onDragStart={(e) => onDragStart(e, numbers)}
      {...handlers}
    >
      <ControlButton value={"1"} clickHandler={clickHandler} />
      <ControlButton value={"2"} clickHandler={clickHandler} />
      <ControlButton value={"3"} clickHandler={clickHandler} />
      <ControlButton value={"4"} clickHandler={clickHandler} />
      <ControlButton value={"5"} clickHandler={clickHandler} />
      <ControlButton value={"6"} clickHandler={clickHandler} />
      <ControlButton value={"7"} clickHandler={clickHandler} />
      <ControlButton value={"8"} clickHandler={clickHandler} />
      <ControlButton value={"9"} clickHandler={clickHandler} />
      <div className="col-span-2">
        <ControlButton value={"0"} clickHandler={clickHandler} />
      </div>
      <ControlButton value={","} clickHandler={clickHandler} />
    </div>
  );
};

export default Numbers;
