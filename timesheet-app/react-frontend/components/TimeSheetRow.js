import React from 'react';

export default class TimeSheetRow extends React.Component{
constructor(props){
	super(props);
	 this.handleChange = this.handleChange.bind(this);
	 this.state = { hours : this.props.hours}
}
handleChange(event){
	this.setState ({
		hours : event.target.value
	});
}

render(){
	const inOut = this.props.inOut === 'in' ? true : false;
		return(<tr data-item={this.props.dayOfWeek}>
			<td>{this.props.date}</td>
			<td><input readOnly type="text" value={this.props.hours}/></td>
			<td><input readOnly type="checkbox" checked={inOut}/></td>
			</tr>);
	}
}
