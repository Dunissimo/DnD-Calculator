import { CSSProperties, FC, MouseEventHandler } from "react";
import { useTheme } from "../utils/hooks";

interface IProps {
  value: string | number;
  style?: CSSProperties;
  clickHandler: MouseEventHandler;
}

const ControlButton: FC<IProps> = ({ value, style, clickHandler }) => {
  const theme = useTheme() === "runtime";

  return (
    <div className="control-div text-center border border-[#E2E3E5] rounded-md">
      <button
        onClick={theme ? clickHandler : () => {}}
        style={style}
        data-number={value}
        className="control py-4 px-6 w-full h-full text-sm font-medium"
      >
        {value}
      </button>
    </div>
  );
};

export default ControlButton;
