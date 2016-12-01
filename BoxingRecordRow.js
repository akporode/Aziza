import React from 'react';

export default class BoxingRecordRow extends React.Component{
	render(){
		console.log("BoxingRecordRow " + this.props.No);
		return (
			<tr>
			<td>{this.props.No}</td>
			<td>{this.props.result}</td>
			<td>{this.props.record}</td>
			<td>{this.props.opponent}</td>
			<td>{this.props.type}</td>
			<td>{this.props.roundTime}</td>
			<td>{this.props.date}</td>
			<td>{this.props.location}</td>
			<td>{this.props.notes}</td>
			</tr>
			)
	}
}