import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitial {
  theme: "runtime" | "constructor";
}
const initialState: IInitial = {
  theme: "constructor",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.theme;
export default themeSlice.reducer;
