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
			selectedWeeks : [],
			weeks : [],
			key: Math.random()

		};
		this.handleUserSelect = this.handleUserSelect.bind(this);
		this.fetchWeeksByWeek = this.fetchWeeksByWeek.bind(this);
		this.fetchAllWeek = this.fetchAllWeek.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleUserSubmit = this.handleUserSubmit.bind(this);
	}
     


    /*
    * call back that is triggered from "TimeSheetWeek" when user selects a week
    */
	handleUserSelect(filterByWeek) {
		console.log("Bubble up handleUserSelect() " + filterByWeek);
		this.fetchWeeksByWeek(filterByWeek);
		this.setState({
			filterByWeek: filterByWeek
		});
		
	}

   /*
   *  * call back that is triggered from "TimeSheetTable" when user sumbtis the form
   */
	handleUserSubmit(filterByWeek) {

        //var  tst = JSON.stringify(this.state);
		console.log("Bubble up handleUserSubmit() with filterByWeek of :" + filterByWeek);
		this.fetchWeeksByWeek(filterByWeek);
		
		this.setState({
			filterByWeek: filterByWeek
		});

		this.setState({ 
			key: Math.random() 
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
    * componentDidMount lifeCycle that is invoked mmediately after the initial rendering occurs. 
    */
    componentDidMount(){

    console.log("entering TimeSheetContainer componentDidMount")
     this.fetchAllWeek();
	 this.fetchWeeksByWeek(this.state.filterByWeek);
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

  fetchWeeksByWeek(filterByWeek) {
     
   alert("fetchWeeksByWeek filterByWeek is" + filterByWeek)
   var fetchUrl = 'http://localhost:3000/timesheets' + '/' +  this.state.email+ '/' + filterByWeek;
  //alert("fetchWeeksByWeek filterByWeek url" + fetchUrl)
	fetch(fetchUrl)
	.then((response) => response.json())
	.then((data) => {
		return data;
	})
	.then((data) =>{
		var selectedWeeks = [];
        var employee ={};
		data.forEach(function(item){
			selectedWeeks =item.timeSheet;
			alert("TimeSheetContainer retchWeeksByWeek " + selectedWeeks);

		});

		this.setState({
			selectedWeeks: selectedWeeks
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
			<TimeSheetTable
			filterByWeek={this.state.filterByWeek} 
			weeks={this.state.selectedWeeks} 
			email={this.state.email} 
			onUserSubmit ={this.handleUserSubmit}/>
			</div>
			<div className="col-md-2">
			</div>
			</div>
			</div>
			);
	}
}

