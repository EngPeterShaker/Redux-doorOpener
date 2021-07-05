export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const openDoor = () => ({ type: "OPEN_DOOR" });
export const closeDoor = () => ({ type: "CLOSE_DOOR" });

export const incrementAction = () => ({ type: INCREMENT });
export const decrementAction = () => ({ type: DECREMENT });

export const fetchData = () => async (dispatch) => {

	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const json = await response.json();
	dispatch(fetchDataSuccess(json));
};

export const fetchDataSuccess = (json) => ({
	type: FETCH_DATA_SUCCESS,
	payload: {
		fetchedData: json,
	},
});
