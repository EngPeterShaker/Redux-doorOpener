import React from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {  incrementAction , decrementAction } from "./redux/actions";

const DoorTogglerFunctional = () => {
	const dispatch = useDispatch();
	const counterReducer = useSelector(state => state.counterReducer)
	console.log(`counterReducer`, counterReducer)
	return (
		<div>
					<div>
				{/* <h1>{this.props.title}</h1>
				<button onClick={() => this.props.openDoor()}>open</button>
				<button onClick={() => this.props.closeDoor()}>close</button>
				<p>{this.props.isDoorOpened ? "door opened " : "door closed"}</p> */}

				<button onClick={()=>dispatch(incrementAction())}>increment</button>
			<div>{counterReducer.counter}</div>
				<button onClick={()=>dispatch(decrementAction())}>decrement</button>
			
			</div>
			
		</div>
	)
}

export default DoorTogglerFunctional
