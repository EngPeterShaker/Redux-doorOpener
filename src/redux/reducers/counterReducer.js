import { INCREMENT, DECREMENT, FETCH_DATA_SUCCESS } from "../actions";

const initialState = {
	counter: 100,
    title : ''
};

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, counter: state.counter + 10 };

		case DECREMENT:
			return {
				...state,
				counter: state.counter >= 10 ? state.counter - 10 : 0,
			};
		case FETCH_DATA_SUCCESS:
			console.log(`FETCH_DATA_SUCCESS state`, state);
			console.log(`FETCH_DATA_SUCCESS action`, action);
            return {
                ...state,
                title : action.payload.fetchedData.title
            }
			// return state;
		default:
			return state;
	}
};
