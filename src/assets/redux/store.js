import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiReducer } from "./apiReducer";
import calcReducer from "./calcReducer";

export const store = configureStore({
	reducer: {
		calc: calcReducer,
		[apiReducer.reducerPath]: apiReducer.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiReducer.middleware),
});

setupListeners(store.dispatch);
