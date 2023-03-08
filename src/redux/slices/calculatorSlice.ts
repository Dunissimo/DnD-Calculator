import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitial {
  firstValue: number | string;
  operator: "/" | "x" | "+" | "-" | "";
  secondValue: number | string;
  result: number | string;
  type: "first" | "second" | "result";
}

const initialState: IInitial = {
  firstValue: "",
  operator: "",
  secondValue: "",
  result: 0,
  type: "first",
};

const checkLength = (value: number | string) => {
  return value.toString().length < 12;
};

const clearState = (state: IInitial) => {
  state.firstValue = "";
  state.operator = "";
  state.secondValue = "";
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addValue: (state, action) => {
      if (state.type === "result") state.type = "first";

      const res = action.payload.replace(",", ".");

      if (state.type === "first" && checkLength(state.firstValue)) {
        state.firstValue += res;
      } else if (state.type === "second" && checkLength(state.secondValue)) {
        state.secondValue += res;
      } else {
        alert("Значение слишком большое");
      }
    },
    addOperator: (state, action) => {
      if (!state.firstValue) return;

      state.type = "second";
      state.operator = action.payload;
    },
    calcResult: (state) => {
      state.type = "result";
      if (state.firstValue && state.operator && state.secondValue) {
        const { firstValue, secondValue, operator } = state;

        switch (operator) {
          case "/":
            if (+secondValue === 0) {
              state.result = "Не определено";
            } else {
              state.result = +firstValue / +secondValue;
            }
            break;
          case "x":
            state.result = +firstValue * +secondValue;

            if (!checkLength(state.result)) {
              state.result = "Cлишком много";
              clearState(state);
              return;
            }

            break;

          case "-":
            state.result = +firstValue - +secondValue;
            break;

          case "+":
            state.result = +firstValue + +secondValue;

            if (!checkLength(state.result)) {
              state.result = "Cлишком много";
              clearState(state);

              return;
            }

            break;
          default:
            state.result = "";
            break;
        }
      }
      state.firstValue = "";
      state.operator = "";
      state.secondValue = "";
    },
  },
});

export const { addValue, addOperator, calcResult } = calculatorSlice.actions;
export const selectCalculator = (state: RootState) => state.calculator;
export default calculatorSlice.reducer;
