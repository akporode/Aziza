import React from 'react';
import TimeSheetWeekContainer from './TimeSheetWeekContainer';
import TimeSheetTable from './TimeSheetTable';

/*
* parent component for weeks display and timesheet display
*/
export default class TimeSheetContainer extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			filterByWeek: '2017-01-07',
			email: 'akporode.shemi@gmail.com',
			weeks : []

		};
		this.handleUserSelect = this.handleUserSelect.bind(this);
		this.fetchAllWeek = this.fetchAllWeek.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
	}

    /*
    * call back that is triggered from "TimeSheetWeek" when user selects a week
    */
    handleUserSelect(filterByWeek) {
    	console.log("Bubble up handleUserSelect() " + filterByWeek);
    	this.setState({
    		filterByWeek: filterByWeek
    	});

    }

	/*
	* handle email change
	*/
	handleEmailChange() {
		this.setState({
			email: email
		});
	}

    /*
    * componentDidMount lifeCycle that is invoked immediately after the initial rendering occurs. 
    */
    componentDidMount(){

    	console.log("entering TimeSheetContainer componentDidMount")
    	this.fetchAllWeek();
    }

    fetchAllWeek(){

    	var fetchAllUrl = 'http://localhost:3000/weeks' + '/' +  this.state.email;
    	fetch(fetchAllUrl)
    	.then((response) => response.json())
    	.then((data) => {
    		return data;
    	})
    	.then((data) =>{
    		var weeks = [];
    		var employee ={};
    		data.forEach(function(item){
    			weeks.push(item.week)
    		});

    		this.setState({
    			weeks: weeks
    		});
    	});

    }

    render(){

    	return(
    		<div className="container">
    		<div className="row">
    		<div className="col-md-2">

    		<div>
    		<label htmlFor="email">Enter email: </label>
    		<input id="email" type="text" placeholder="Search employee..." value={this.state.email}  onChange={this.handleEmailChange}/>
    		</div>
    		<TimeSheetWeekContainer  
    		filterByWeek={this.state.filterByWeek} 
    		weeks={this.state.weeks}  
    		onUserSelect={this.handleUserSelect}/>

    		</div>
    		<div className="col-md-8">
    		<TimeSheetTable key={ `foo-component-${this.state.filterByWeek}` } 
    		filterByWeek={this.state.filterByWeek} 
    		email={this.state.email} />
    		</div>
    		<div className="col-md-2">
    		</div>
    		</div>
    		</div>
    		);
    }
}

