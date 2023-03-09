import { FC } from "react";
import {
  useReturnClasses,
  useDnD,
  useTheme,
  useDblClick,
  useCalculator,
} from "../utils/hooks";
import { IRuntimeComp } from "../utils/types";

interface IProps {
  runtime?: boolean;
}
const display: IRuntimeComp = {
  id: Math.ceil(Math.random() * 100000),
  type: "display",
};

const Display: FC<IProps> = ({ runtime }) => {
  const { handlers, onDragStart, onDrop } = useDnD();
  const dblClickHandler = useDblClick();
  const theme = useTheme() === "constructor";
  const { type, result, firstValue, secondValue } = useCalculator();

  const { isInClass, isInRuntime, themeClass } = useReturnClasses(
    display,
    runtime,
    false
  );

  const renderWhat = () => {
    switch (type) {
      case "first":
        return firstValue ? firstValue : "0";
      case "second":
        return secondValue ? secondValue : "0";
      case "result":
        return result;
    }
  };

  return (
    <div
      onDoubleClick={theme ? (e) => dblClickHandler(e, display) : () => {}}
      draggable={theme}
      className={`component display w-full cursor-pointer ${isInRuntime} ${isInClass} ${themeClass}`}
      onDragStart={(e) => onDragStart(e, display)}
      onDrop={(e) => onDrop(e, display)}
      {...handlers}
    >
      <p className="w-full py-2 px-2 text-right text-4xl text-[#111827] rounded-md bg-[#F3F4F6]">
        {renderWhat()}
      </p>
    </div>
  );
};

export default Display;
