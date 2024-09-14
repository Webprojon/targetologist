import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GlobalType {
	rangeValues: number[];
}

const initialState = {
	rangeValues: [120],
} as GlobalType;

export const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setRangeValues: (state: GlobalType, actions: PayloadAction<number[]>) => {
			state.rangeValues = actions.payload;
		},
	},
});

export const { setRangeValues } = globalSlice.actions;
