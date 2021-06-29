import {combineReducers} from 'redux';

const initialState = { isDoorOpened: false };
export const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case "OPEN_DOOR":
			return { ...state, isDoorOpened: true };
		//WRONG>>>> return {state.isDoorOpened:true};
		case "CLOSE_DOOR":
			return { ...state, isDoorOpened: false };
		// return {};

		default:
			return state;
	}
};

// export default weatherReducer

export const reducers = combineReducers({
	weatherReducer,
});
