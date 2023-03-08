import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import componentsReducer from "./slices/componentsSlice";
import currentCompReducer from "./slices/currentCompSlice";
import calculatorReducer from "./slices/calculatorSlice";
export const rootReducer = combineReducers({
  theme: themeReducer,
  components: componentsReducer,
  current: currentCompReducer,
  calculator: calculatorReducer,
});
