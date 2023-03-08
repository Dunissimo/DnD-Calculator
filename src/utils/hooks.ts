import {
  DragEventHandler,
  DragEvent,
  useCallback,
  MouseEventHandler,
  MouseEvent,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { addCurrent, deleteCurrent } from "../redux/slices/currentCompSlice";
import { IRuntimeComp } from "./types";
import { addComponent, deleteComponent } from "../redux/slices/componentsSlice";
import { selectComponents } from "../redux/slices/componentsSlice";
import { selectTheme } from "../redux/slices/themeSlice";

export const useDnD = () => {
  const dispatch = useAppDispatch();

  const dragStartHandler = (e: DragEvent, item: IRuntimeComp) => {
    e.currentTarget.classList.add("moving");
    dispatch(addCurrent(item));
  };

  const dragLeaveHandler: DragEventHandler = (e) => {
    e.currentTarget.classList.remove("dragged");
  };
  const dragEndHandler: DragEventHandler = (e) => {
    e.currentTarget.classList.remove("dragged");
    e.currentTarget.classList.remove("moving");

    dispatch(deleteCurrent());
  };
  const dragEnterHandler: DragEventHandler = (e) => {
    const classList = e.currentTarget.classList;
    if (classList.contains("runtime") || classList.contains("constructor")) {
      classList.add("dragged");
    }
  };
  const dragOverHandler: DragEventHandler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const dropHandler = (e: DragEvent, item: IRuntimeComp) => {
    e.preventDefault();

    const classList = e.currentTarget.classList;

    classList.remove("dragged");

    if (classList.contains("runtime")) {
      classList.remove("first-drop");
      dispatch(addComponent(item));
    }
    if (classList.contains("constructor")) {
      dispatch(deleteComponent(item));
    }
  };

  return {
    handlers: {
      onDragLeave: useCallback(dragLeaveHandler, []),
      onDragEnd: useCallback(dragEndHandler, [dispatch]),
      onDragEnter: useCallback(dragEnterHandler, []),
      onDragOver: useCallback(dragOverHandler, []),
    },
    onDragStart: useCallback(dragStartHandler, [dispatch]),
    onDrop: useCallback(dropHandler, [dispatch]),
  };
};

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

export const useDblClick = () => {
  const dispatch = useAppDispatch();
  const dblClickHandler = (e: MouseEvent, item: IRuntimeComp) => {
    dispatch(deleteComponent(item));
  };

  return dblClickHandler;
};

// Посчитал, что нужно вынести, ведь иначе будет 2 импорта вместо одного.
export const useTheme = () => {
  return useAppSelector(selectTheme);
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
