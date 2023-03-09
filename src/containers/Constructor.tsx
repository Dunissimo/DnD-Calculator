import { FC } from "react";
import Display from "../components/Display";
import Equal from "../components/Equal";
import { useCurrent, useTheme, useDnD } from "../utils/hooks";
import Numbers from "./Numbers";
import Operators from "./Operators";

const Constructor: FC = () => {
  const { handlers, onDrop } = useDnD();
  const theme = useTheme() === "runtime";
  const current = useCurrent();

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
