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
fetchSongDetails(event) {
  const song = event.target.parentNode
  //console.log('We need to get the details for ', song);
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


//working
// render(){
// 	const inOut = this.props.inOut === 'in' ? true : false;
// 		return(<tr data-item={this.props.dayOfWeek} onClick={this.fetchSongDetails}>
// 			<td>{this.props.dayOfWeek}</td>
// 			<td><input readOnly type="text" value={this.props.hours}/></td>
// 			<td><input type="checkbox" defaultChecked={inOut}/></td>
// 			</tr>);
// 	}
// }

