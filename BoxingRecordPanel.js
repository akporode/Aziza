import React from 'react';
import BoxingRecordRow from './BoxingRecordRow';

export default class BoxingRecordPanel extends React.Component{

	constructor(props){
		super(props);
		this.state = { data: []
		};

	}

	componentDidMount() { 
		console.log("entering componentDidMount");
		this.getBoxingRecordsApiAsync();
		
	}

	getBoxingRecordsApiAsync() {

		console.log("entering getBoxingRecordsApiAsync");
		fetch('http://localhost:8080/BoxingRecords')
		.then((response) => response.json())
		.then((responseJson) => {
			return responseJson.boxingsRecords;
		})
		.then((boxingsRecords) =>{
			this.setState({data : boxingsRecords});
		})
		.catch((error) => {
			console.error(error);
		});
	}
	
	render(){

		var rows = [];
		this.state.data.forEach(function(box){
			rows.push(<BoxingRecordRow key={box.No} 
				no={box.No} 
				result={box.result}
				record={box.record} 
				opponent={box.opponent}  
				type = {box.type}  
				roundTime={box.roundTime} 
				date= {box.date}
				location={box.location}  
				notes={box.notes} />)
		});

		return (

			<div className="panel panel-default">
			<div className="panel-heading"><h3>Professional Boxing Record</h3>
			</div>
			<div className="panel-body">
			<table className="table table-striped">
			<thead>
			<tr>
			<th>No</th>
			<th>result</th>
			<th>record</th>
			<th>opponent</th>
			<th>type</th>
			<th>roundTime</th>
			<th>date</th>
			<th>location</th>
			<th>notes</th>
			</tr>
			</thead>
			<tbody>
			{rows}
			</tbody>
			</table>
			</div>
			</div>
			);
	}
}


