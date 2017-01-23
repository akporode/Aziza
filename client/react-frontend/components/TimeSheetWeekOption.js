import React from 'react';

/*
* TimeSheetWeek options react component
*/
export default class TimeSheetWeekOption extends React.Component{
	render(){
		return(<option value={this.props.weekName}>{this.props.weekName}</option>);
	}
	/*
	* lifecycle component is called after component is mounted;
	*/
	componentDidMount() { 
		console.log("entering TimeSheetWeekOption componentDidMount" );
		
		
	}
	
}
