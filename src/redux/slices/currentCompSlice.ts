import { createSlice } from "@reduxjs/toolkit";
import { IRuntimeComp } from "../../utils/types";
import { RootState } from "../store";

interface IInitial {
  currentComponent: IRuntimeComp | null;
}
const initialState: IInitial = {
  currentComponent: null,
};

export const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    addCurrent: (state, action) => {
      state.currentComponent = action.payload;
    },
    deleteCurrent: (state) => {
      state.currentComponent = null;
    },
  },
});

export const { addCurrent, deleteCurrent } = currentSlice.actions;
export const selectCurrent = (state: RootState) =>
  state.current.currentComponent;
export default currentSlice.reducer;
