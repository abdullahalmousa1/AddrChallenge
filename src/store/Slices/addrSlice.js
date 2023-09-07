import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  rowIndex: 0,
  rows: [],
  total: 0,
};
export const addrSlice = createSlice({
  name: "addr",
  initialState,
  reducers: {
    addNewRow: (state, action) => {
      state.rows.push(action.payload);
      state.rowIndex++;
    },
    removeRow: (state, action) => {
      const index = state.rows.findIndex((x) => x.key === action.payload);
      if (index > -1) state.rows.splice(index, 1);
    },
    updateNumber: (state, action) => {
      const index = state.rows.findIndex((x) => x.key === action.payload.key);
      if (index > -1) {
        state.rows[index] = {
          ...state.rows[index],
          number: action.payload.value,
        };
      }
    },
    disableButton: (state, action) => {
      const index = state.rows.findIndex((x) => x.key === action.payload.key);
      if (index > -1) {
        state.rows[index] = {
          ...state.rows[index],
          isDisabled: action.payload.value ? false : true,
        };
      }
    },
    updateRowSign: (state, action) => {
      const index = state.rows.findIndex((x) => x.key === action.payload.key);
      if (index > -1) {
        state.rows[index] = {
          ...state.rows[index],
          sign: action.payload.sign,
        };
      }
    },
    updateTotalResult: (state) => {
      const totalResult = state.rows.reduce((total, currentValue) => {
        if (!currentValue.isDisabled) {
          switch (currentValue.sign) {
            case "+":
              return total + (parseFloat(currentValue.number) || 0);
            case "-":
              return total + (parseFloat(currentValue.number) || 0) * -1;
            default:
              return 0;
          }
        }
        return total;
      }, 0);

      state.total = totalResult;
    },
  },
});

export const {
  addNewRow,
  removeRow,
  updateNumber,
  disableButton,
  updateRowSign,
  updateTotalResult,
} = addrSlice.actions;

export default addrSlice.reducer;
