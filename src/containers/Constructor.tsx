import { FC } from "react";
import Display from "../components/Display";
import Equal from "../components/Equal";
import { selectCurrent } from "../redux/slices/currentCompSlice";
import { useAppSelector, useTheme, useDnD } from "../utils/hooks";
import Numbers from "./Numbers";
import Operators from "./Operators";

const Constructor: FC = () => {
  const { handlers, onDrop } = useDnD();
  const current = useAppSelector(selectCurrent);
  const theme = useTheme() === "runtime";

  if (theme) {
    return <div className="constructor w-1/2 flex flex-col gap-4"></div>;
  }

  return (
    <div
      className="constructor w-1/2 m-auto md:m-0 flex flex-col gap-4"
      {...handlers}
      onDrop={(e) => onDrop(e, current!)}
    >
      <Display />
      <Operators isShadow />
      <Numbers isShadow />
      <Equal isShadow />
    </div>
  );
};

export default Constructor;
