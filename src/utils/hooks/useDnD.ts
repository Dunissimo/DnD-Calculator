import { DragEvent, DragEventHandler, useCallback } from "react";
import {
  addComponent,
  deleteComponent,
} from "../../redux/slices/componentsSlice";
import { addCurrent, deleteCurrent } from "../../redux/slices/currentCompSlice";
import { useAppDispatch } from "../hooks";
import { IRuntimeComp } from "../types";

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
