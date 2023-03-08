import { createSlice } from "@reduxjs/toolkit";
import { IRuntimeComp } from "../../utils/types";
import { RootState } from "../store";

interface IInitial {
  runtimeComponents: IRuntimeComp[];
}
const initialState: IInitial = {
  runtimeComponents: [],
};

export const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const res = state.runtimeComponents.find(
        (comp) => comp.type === action.payload.type
      );

      if (res) return;

      state.runtimeComponents.push(action.payload);
    },
    deleteComponent: (state, action) => {
      const index = state.runtimeComponents.findIndex(
        (comp) => comp.type === action.payload.type
      );

      // const index = state.runtimeComponents.findIndex((comp) => {});
      // console.log(index);

      if (index >= 0) {
        state.runtimeComponents.splice(index, 1);
        return;
      }
    },
  },
});

export const { addComponent, deleteComponent } = componentsSlice.actions;
export const selectComponents = (state: RootState) =>
  state.components.runtimeComponents;
export default componentsSlice.reducer;
