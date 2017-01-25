import React from 'react';
import EmployeeProfile from './EmployeeProfile';
import TimeSheetRow from './TimeSheetRow';

export default class TimeSheetTable extends React.Component{

   /*
   *
   */
   constructor(props) {
   	super(props);

	    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEditModeSwitch = this.handleEditModeSwitch.bind(this);
		this.fetchTimeSheets = this.fetchTimeSheets.bind(this);
		//https://github.com/facebook/react/issues/6222
		//this is needed to prevent the warning of switching from uncontrolled component to a controlled component
		var monday = {
			id : '',
			hours : '',
			inOut : '',
			date : '',
			dayName : '',
			endOfWeek : '',
			nameOfWeek : '',
		};

		var tuesday = {
			id : '',
			hours : '',
			inOut : '',
			date : '',
			dayName : '',
			endOfWeek : '',
			nameOfWeek : '',
		};

		var wednesday = {
			id : '',
			hours : '',
			inOut : '',
			date : '',
			dayName : '',
			endOfWeek : '',
			nameOfWeek : '',
		};

		var thursday = {
			id : '',
			hours : '',
			inOut : '',
			date : '',
			dayName : '',
			endOfWeek : '',
			nameOfWeek : '',
		};

		var friday = {
			id : '',
			hours : '',
			inOut : '',
			date : '',
			dayName : '',
			endOfWeek : '',
			nameOfWeek : '',
		};


		this.state = { 
			editMode: false, 
			weeks:[],
			employee:{},
			monday:monday,
			tuesday:tuesday,
			wednesday:wednesday,
			thursday:tuesday,
			friday:friday
		};

		
	
	}
	/*
	* lifecycle component is called after component is mounted;
	*/
	componentDidMount() { 
		this.fetchTimeSheets() ;
		console.log("entering TimeSheetTable componentDidMount" );
		
		
	}
	
	/*
	* fetch time sheets on mount
	*/
	fetchTimeSheets() {

        var filterByWeek = this.props.filterByWeek;
        var email  = this.props.email;

       var fetchUrl = 'http://localhost:3000/timesheets' + '/' +  email+ '/' + filterByWeek;
       alert(" fetchUrl : "  + fetchUrl);

		fetch(fetchUrl)
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.then((data) =>{
			var employee ={};
			var weeks = [];
			var monday = {};
			var tuesday = {};
			var wednesday = {};
			var thursday = {};
			var friday = {};


			data.forEach(function(item){

			alert(" fetched items : " +  item.firstName +" " + item.lastName )
				employee.firstName= item.firstName;
				employee.lastName = item.lastName;
				weeks = item.timeSheet;

				weeks.forEach(function(day){
					console.log("days :" + day.dayName);
					
					if(day.endOfWeek === filterByWeek){

						if(day.dayName ==="monday"){
							monday = {
								id : day.id,
								hours : day.hours,
								inOut : day.inOut,
								date : day.date,
								dayName : day.dayName,
								endOfWeek : day.endOfWeek,
								nameOfWeek : day.nameOfWeek
							};
						}
						if(day.dayName ==="tuesday"){
							tuesday = {
								id : day.id,
								hours : day.hours,
								inOut : day.inOut,
								date : day.date,
								dayName : day.dayName,
								endOfWeek : day.endOfWeek,
								nameOfWeek : day.nameOfWeek
							}
						}
						if(day.dayName ==="wednesday"){
							wednesday = {
								id : day.id,
								hours : day.hours,
								inOut : day.inOut,
								date : day.date,
								dayName : day.dayName,
								endOfWeek : day.endOfWeek,
								nameOfWeek : day.nameOfWeek
							}
						}
						if(day.dayName ==="thursday"){
							thursday = {
								id : day.id,
								hours : day.hours,
								inOut : day.inOut,
								date : day.date,
								dayName : day.dayName,
								endOfWeek : day.endOfWeek,
								nameOfWeek : day.nameOfWeek
							}
						}
						if(day.dayName ==="friday"){
							friday = {
								id : day.id,
								hours : day.hours,
								inOut : day.inOut,
								date : day.date,
								dayName : day.dayName,
								endOfWeek : day.endOfWeek,
								nameOfWeek : day.nameOfWeek
							}
						}
					}
				});


});

this.setState({
	editMode: false, 
	employee : employee,
	weeks: weeks,
	monday : monday,
	tuesday : tuesday,
	wednesday : wednesday,
	thursday : thursday,
	friday : friday
});



})
.catch((error) => {
	console.error(error);
});
}

/*
* handle post  timesheet form data backend
*/
handleSubmit(event){


//if the POST request sends an XML payload to the server using application/xml or text/xml, then the request is preflighted.
//var formData  = new FormData(document.getElementById('timeSheetForm'))

var formBody = {
	firstName : this.state.employee.firstName,
	lastName : this.state.employee.lastName,
	email : this.props.email,
	week : this.props.filterByWeek,
	timeSheet : [ this.state.monday,this.state.tuesday,this.state.wednesday,this.state.thursday,this.state.friday]
};	


fetch('http://localhost:3000/postTimesheets', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(formBody)
	
});

this.setState({
	editMode : false,
	employee : this.state.employee,
	email : this.props.email,
	week : this.props.filterByWeek,
	weeks : [ this.state.monday,this.state.tuesday,this.state.wednesday,this.state.thursday,this.state.friday]
});


event.preventDefault();

}


handleChange(event){

	console.log("alert monday" + event.target.type   +"    " + event.target.value);
     ///monday
     if(event.target.id === "1" &&  event.target.type === 'text')
     {
     
     	var monday = {
     		id : this.state.monday.id,
     		hours : event.target.value,
     		inOut : this.state.monday.inOut,
     		date : this.state.monday.date,
     		dayName : this.state.monday.dayName,
     		endOfWeek : this.state.monday.endOfWeek,
     		nameOfWeek : this.state.monday.nameOfWeek
     	};
     	this.setState({
     		monday : monday
     	});
     }
     if(event.target.id === "1" &&  event.target.type === 'checkbox')
     {
     	//alert("alert monday" + this.state.monday.hours);
     	var monday = {
     		id : this.state.monday.id,
     		hours : this.state.monday.hours,
     		inOut : (event.target.value === "on" ? "out" : "in"),
     		date : this.state.monday.date,
     		dayName : this.state.monday.dayName,
     		endOfWeek : this.state.monday.endOfWeek,
     		nameOfWeek : this.state.monday.nameOfWeek
     	};
     	this.setState({
     		monday : monday
     	});
     }
    ///tuesday
    if(event.target.id === "2" &&  event.target.type === 'text')
    {
    	alert("alert tuesday" + this.state.tuesday.hours);
    	var tuesday = {
    		id : this.state.tuesday.id,
    		hours : event.target.value,
    		inOut : this.state.tuesday.inOut,
    		date : this.state.tuesday.date,
    		dayName : this.state.tuesday.dayName,
    		endOfWeek : this.state.tuesday.endOfWeek,
    		nameOfWeek : this.state.monday.nameOfWeek
    	};
    	this.setState({
    		tuesday : tuesday
    	});
    }
    if(event.target.id === "2" &&  event.target.type === 'checkbox')
    {
    	alert("alert tuesday" + this.state.tuesday.hours);
    	var tuesday = {
    		id : this.state.tuesday.id,
    		hours : this.state.tuesday.hours,
    		inOut : (event.target.value === false ? "out" : "in"),
    		date : this.state.tuesday.date,
    		dayName : this.state.tuesday.dayName,
    		endOfWeek : this.state.tuesday.endOfWeek,
    		nameOfWeek : this.state.tuesday.nameOfWeek
    	};
    	this.setState({
    		tuesday : tuesday
    	});
    }

	///wednesday
	if(event.target.id === "3" &&  event.target.type === 'text')
	{
		//alert("alert wednesday" + this.state.wednesday.hours);
		var wednesday = {
			id : this.state.wednesday.id,
			hours : event.target.value,
			inOut : this.state.wednesday.inOut,
			date : this.state.wednesday.date,
			dayName : this.state.wednesday.dayName,
			endOfWeek : this.state.wednesday.endOfWeek,
			nameOfWeek : this.state.wednesday.nameOfWeek
		};
		this.setState({
			wednesday : wednesday
		});
	}
	if(event.target.id === "3" &&  event.target.type === 'checkbox')
	{
	
		var wednesday = {
			id : this.state.wednesday.id,
			hours : this.state.wednesday.hours,
			inOut : (event.target.value === false ? "out" : "in"),
			date : this.state.wednesday.date,
			dayName : this.state.wednesday.dayName,
			endOfWeek : this.state.wednesday.endOfWeek,
			nameOfWeek : this.state.wednesday.nameOfWeek
		};
		this.setState({
			wednesday : wednesday
		});
	}

	//thursday
	if(event.target.id === "4" &&  event.target.type === 'text')
	{
		
		var thursday = {
			id : this.state.thursday.id,
			hours : event.target.value,
			inOut : this.state.thursday.inOut,
			date : this.state.thursday.date,
			dayName : this.state.thursday.dayName,
			endOfWeek : this.state.thursday.endOfWeek,
			nameOfWeek : this.state.thursday.nameOfWeek
		};
		this.setState({
			thursday : thursday
		});
	}
	if(event.target.id === "4" &&  event.target.type === 'checkbox')
	{
		
		var thursday = {
			id : this.state.thursday.id,
			hours : this.state.thursday.hours,
			inOut :  (event.target.value === false ? "out" : "in"),
			date : this.state.thursday.date,
			dayName : this.state.thursday.dayName,
			endOfWeek : this.state.thursday.endOfWeek,
			nameOfWeek : this.state.thursday.nameOfWeek
		};
		this.setState({
			thursday : thursday});
	}

	//friday
	if(event.target.id === "5" &&  event.target.type === 'text')
	{
		
		var friday = {
			id : this.state.friday.id,
			hours : event.target.value,
			inOut : this.state.friday.inOut,
			date : this.state.friday.date,
			dayName : this.state.friday.dayName,
			endOfWeek : this.state.friday.endOfWeek,
			nameOfWeek : this.state.friday.nameOfWeek
		};
		this.setState({
			friday : friday
		});
	}
	if(event.target.id === "5" &&  event.target.type === 'checkbox')
	{
		//alert("alert friday" + this.state.friday.hours);
		var friday = {
			id : this.state.friday.id,
			hours : this.state.friday.hours,
			inOut :  (event.target.value === false ? "out" : "in"),
			date : this.state.friday.date,
			dayName : this.state.friday.dayName,
			endOfWeek : this.state.friday.endOfWeek,
			nameOfWeek : this.state.friday.nameOfWeek
		};
		this.setState({
			friday : friday
		});
	}
}

handleEditModeSwitch(event){
  var editMode =	event.target.value == "on"? true: false;
  //this.fetchTimeSheets();
  this.setState({
			editMode : editMode
		});
   }


render(){
	

	var filterByWeek = this.props.filterByWeek;
	alert("filterByWeek in TimeSheetTable  " + filterByWeek)
     
     var timeSheetTable ;

     if(this.state.editMode){
     	
     	timeSheetTable = (<table id="timesheetTable" className="table table-bordered table-hover table-condensed">
		<thead><tr><th>Day Of Week</th><th>Hours</th><th>In/Out</th></tr></thead>
		<tfoot><tr><td>Total</td><td>40</td><td></td></tr></tfoot>
		<tbody>
		<tr>
		<td>{this.state.monday.date}</td>
		<td><input name={this.state.monday.dayName} type="text" id={this.state.monday.id} value={this.state.monday.hours} onChange={this.handleChange} /></td>
		<td><input  id={this.state.monday.id}  type="checkbox" checked={(this.state.monday.inOut === "out" ? false : true)} onChange={this.handleChange}  /></td>
		</tr>
		<tr>
		<td>{this.state.tuesday.date}</td>
		<td><input name={this.state.tuesday.dayName} type="text"  id={this.state.tuesday.id} value={this.state.tuesday.hours} onChange={this.handleChange} /></td>
		<td><input type="checkbox" checked={(this.state.tuesday.inOut === "out" ? false : true)} onChange={this.handleChange}  /></td>
		</tr>
		<tr>
		<td>{this.state.wednesday.date}</td>
		<td><input name={this.state.wednesday.dayName} type="text"  id={this.state.wednesday.id} value={this.state.wednesday.hours} onChange={this.handleChange} /></td>
		<td><input type="checkbox" checked={(this.state.wednesday.inOut === "out" ? false : true)} onChange={this.handleChange}  /></td>
		</tr>
		<tr>
		<td>{this.state.thursday.date}</td>
		<td><input name={this.state.thursday.dayName} type="text"  id={this.state.thursday.id} value={this.state.thursday.hours} onChange={this.handleChange} /></td>
		<td><input type="checkbox" checked={(this.state.thursday.inOut === "out" ? false : true)} onChange={this.handleChange}  /></td>
		</tr>
		<tr>
		<td>{this.state.friday.date}</td>
		<td><input name={this.state.friday.dayName} type="text"  id={this.state.friday.id} value={this.state.friday.hours} onChange={this.handleChange} /></td>
		<td><input type="checkbox" checked={(this.state.friday.inOut === "out" ? false : true)} onChange={this.handleChange}  /></td>
		</tr>
		
		</tbody>
		</table>
     		);
     }
   else if(this.state.editMode == false) {
   	  
   	     alert("read only mode editMode: " + this.state.weeks);
        var readOnlyTimeSheetRows = [];
        this.state.weeks.forEach(function(week){

        alert(week.endOfWeek);
        });

        this.state.weeks.forEach(function(week){

        	if(week.endOfWeek === filterByWeek)
        	{
        	readOnlyTimeSheetRows.push(<TimeSheetRow date ={week.date} dayOfWeek = {week.dayName} hours = {week.hours} key={week.date} inOut = {week.inOut} />);
           }
        });

        timeSheetTable = (
        	<table id="timesheetTable" className="table table-bordered table-hover table-condensed">
		<thead><tr><th>Day Of Week</th><th>Hours</th><th>In/Out</th></tr></thead>
		<tfoot><tr><td>Total</td><td>40</td><td></td></tr></tfoot>
		<tbody>
		 {readOnlyTimeSheetRows}
		</tbody>
		</table>
		);

   }

   var editDiv ;
   if(this.state.editMode == false){
   	editDiv = (
   	<div>
        <p>
          <input
            type="checkbox"
            checked={this.state.editMode}
            onChange={this.handleEditModeSwitch}/>
          {' '}
          Swith to Edit Mode</p>
   	</div>
   	); 
   }
   	else if(this.state.editMode == true){
   		editDiv = (
   	<div>
		<input  className="btn btn-primary" type="submit" value="Submit" />
   	</div>); 	
   	}


	return(


		<form id="timeSheetForm" onSubmit={this.handleSubmit}>
		<EmployeeProfile  firstName={this.state.employee.firstName} lastName={this.state.employee.lastName}/>
		{timeSheetTable}
		{editDiv}
		</form>
		);

}
}