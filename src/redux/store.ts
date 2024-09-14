import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "./global-slices";

export const store = configureStore({
	reducer: {
		user: globalSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
