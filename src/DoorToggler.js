import React, { Component } from "react";
import { connect } from "react-redux";
import { closeDoor, openDoor } from "./redux/actions";
class DoorToggler extends Component {
	render() {
		console.log(`this.props`, this.props);

		return (
			<div>
				<button onClick={() => this.props.openDoor()}>open</button>
				<button onClick={() => this.props.closeDoor()}>close</button>
				<p>{this.props.isDoorOpened ? "door opened " : "door closed"}</p>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log(`state`, state);
	return {
		isDoorOpened: state.weatherReducer.isDoorOpened,
	};
};

const mapDispatchToProps = {
	openDoor,
	closeDoor,
};
const container = connect(mapStateToProps, mapDispatchToProps)(DoorToggler); //
export default container;
