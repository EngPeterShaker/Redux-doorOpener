import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";
import { counterReducer } from "./counterReducer";

export const reducers = combineReducers({
	weatherReducer,
	counterReducer,
});
