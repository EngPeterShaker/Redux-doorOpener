import React, { Component } from "react";
import { connect } from "react-redux";
import { closeDoor, openDoor, incrementAction , decrementAction  , fetchData} from "./redux/actions";
class DoorToggler extends Component {
// incrementCounter=()=>{
componentDidMount(){
this.props.fetchData()
}
	
	render() {
		console.log(`this.props`, this.props);

		return (
			<div>
				<h1>{this.props.title}</h1>
				<button onClick={() => this.props.openDoor()}>open</button>
				<button onClick={() => this.props.closeDoor()}>close</button>
				<p>{this.props.isDoorOpened ? "door opened " : "door closed"}</p>

				<button onClick={()=>this.props.incrementAction()}>increment</button>
			<div>{this.props.counter}</div>
				<button onClick={()=>this.props.decrementAction()}>decrement</button>
			
			</div>
		);
	}
}
// include state in the component as props
const mapStateToProps = (state) => {
	console.log(`state`, state);
	return {
		isDoorOpened: state.weatherReducer.isDoorOpened,
		counter :state.counterReducer.counter,
		title : state.counterReducer.title
	};
};


// include actions in the component as props
const mapDispatchToProps = {
	openDoor,
	closeDoor,
	incrementAction,
	decrementAction ,
	fetchData
};
const container = connect(mapStateToProps, mapDispatchToProps)(DoorToggler); //
export default container;
