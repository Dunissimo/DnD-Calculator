import { selectComponents } from "../../redux/slices/componentsSlice";
import { useAppSelector, useTheme } from "../hooks";
import { IRuntimeComp } from "../types";

export const useReturnClasses = (
  obj: IRuntimeComp,
  runtime: boolean | undefined,
  isShadow: boolean | undefined = false
) => {
  const componentsArr = useAppSelector(selectComponents);
  const theme = useTheme();

  if (runtime) {
    const isInRuntime = runtime ? "runtime-component" : "";

    const themeClass = theme === "runtime" ? "inRuntime" : "";

    return {
      isInClass: "",
      isShadowClass: "",
      isInRuntime,
      themeClass,
    };
  } else {
    const isIn = componentsArr.find((comp) => comp.type === obj.type);
    const isInClass = isIn ? "disabled" : "";
    const themeClass = theme === "runtime" ? "disabled" : "";
    const isShadowClass = isShadow ? "with-shadow" : "";

    return { isInClass, isShadowClass, isInRuntime: "", themeClass };
  }
};
