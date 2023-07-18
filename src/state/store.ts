import { configureStore } from "@reduxjs/toolkit";
import counter, { CounterState } from "./reducers/counter";

const store = configureStore({
	reducer: {
		counter,
	},
});

export interface StoreState {
	counter: CounterState;
}

export default store;
