import React from 'react';
import TimeSheetWeek from './TimeSheetWeek';

export default class TimeSheetWeekContainer extends React.Component{
	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);

	}
	handleChange(event) {
   

    //when a different week option is changed notify "TimeSheetContainer"
    //--the parent component of TimeSheetWeekContainer
    this.props.onUserSelect(event.target.value);


    console.log("Logging handleChange() " + event.target.value);
    }
   /*
	* lifecycle component is called after component is mounted;
	*/
	componentDidMount() { 
		console.log("entering TimeSheetWeekContainer componentDidMount" );
		
		
	}
	

render(){
	this.props.weeks.forEach(function(item){
		console.log( "each week item " + item);
	});
var unique = [...new Set(this.props.weeks.map(item => item))];

var options = [];
unique.forEach(function(item){
	options.push(<TimeSheetWeek key={item} weekName={item} />);
});

return (
	<div>
	<div>
	<h3>Weeks</h3>
	</div>
	<select value={this.props.filterByWeek} onChange={this.handleChange}>
	{options}
	</select>

	</div>
	);
}	

}