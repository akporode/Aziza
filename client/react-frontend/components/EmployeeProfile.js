import React from 'react';

export default class EmployeeProfile extends React.Component{
	
	render()
	{
		return (
			<div>
		     <h2>Employee</h2>
		     <div><h4>{this.props.firstName} {this.props.lastName}</h4></div>
			</div>
			);
	}
}