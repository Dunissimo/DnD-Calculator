import { FC, Fragment } from "react";

import { useAppSelector, useTheme, useDnD } from "../utils/hooks";

import { selectCurrent } from "../redux/slices/currentCompSlice";
import { selectComponents } from "../redux/slices/componentsSlice";

import drugMe from "../assets/drugMe.svg";
import { typeForComp } from "../utils/types";
import Display from "../components/Display";
import Equal from "../components/Equal";
import Numbers from "./Numbers";
import Operators from "./Operators";

const Runtime: FC = () => {
  const { handlers, onDrop } = useDnD();
  const components = useAppSelector(selectComponents);
  const current = useAppSelector(selectCurrent);
  const theme = useTheme() === "runtime";

  const getComponent = (type: typeForComp) => {
    switch (type) {
      case "display":
        return Display;
      case "equal":
        return Equal;
      case "numbers":
        return Numbers;
      case "operators":
        return Operators;
    }
  };

  return (
    <div
      className="runtime first-drop w-1/2 m-auto min-h-[300px] md:h-auto md:m-0 relative  text-sm font-medium"
      {...handlers}
      onDrop={(e) => onDrop(e, current!)}
    >
      <div className="runtime-components w-full flex flex-col gap-4">
        {components.map((comp) => {
          const Component = getComponent(comp.type);
          return (
            <Fragment key={comp.id}>
              <Component isShadow={false} runtime />
            </Fragment>
          );
        })}
      </div>

      {theme && components.length < 1 ? (
        <div className="w-full py-8 text-center flex gap-1 justify-center items-center flex-col border-4 border-dashed">
          Нет компонентов для работы
        </div>
      ) : (
        <div className="welcome w-full h-full z-[-1] absolute top-auto left-auto text-center flex gap-1 justify-center items-center flex-col border-4 border-dashed">
          <img src={drugMe} alt="" />
          <p className="text-blue-500">Перетащите сюда</p>
          <p className="text-[#6B7280]">
            любой элемент <br /> из левой панели
          </p>
        </div>
      )}
    </div>
  );
};

export default Runtime;
