import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export type Item = {
  id: string;
  name: string;
  qty: number;
  rate: number;
};

type State = {
  items: Item[];
};

const initialState: State = {
  items: [{ id: crypto.randomUUID(), name: "", qty: 1, rate: 0 }],
};

const quotationSlice = createSlice({
  name: "quotation",
  initialState,
  reducers: {
    addRow(state) {
      state.items.push({
        id: crypto.randomUUID(),
        name: "",
        qty: 1,
        rate: 0,
      });
    },
    removeRow(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    updateItem(
      state,
      action: PayloadAction<{
        id: string;
        field: keyof Item;
        value: string | number;
      }>
    ) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item[action.payload.field] = action.payload.value as never;
      }
    },
  },
});

export const { addRow, removeRow, updateItem } = quotationSlice.actions;
export default quotationSlice.reducer;
