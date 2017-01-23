import React from 'react';
import TimeSheetContainer from './components/TimeSheetContainer';


/*
* Top TimeSheetApp component which houses TimeSheetContainer
*/
export default class TimeSheetApp extends React.Component{ 
	
	// constructor(props){
	// 	super(props);
	// 	this.state = { 
	// 		weeks: [],
	// 		employee:{},
	// 		timesheet:{}
	// 	};

	// }

	// componentDidMount() { 
		
	// 	this.getBoxingRecordsApiAsync();
		
	// }

	

	render(){

		//var v  = this.state.data;
		//  var employees = {
  //  			 weeks: []
		// };
		 //var p = this.state.data;
		//  this.state.data.forEach(function(b){
		//   p = b;
		// });

		//  //console.log("logging p " + this.p.lastName);
		// this.state.data.forEach(function(b){
 	// 	console.log("rendering this.state.data " + b.lastName + " " + b.firstName  +" " + b.weeks[0].id +"  " + b.weeks[0].daysOfWeek[0].dayName);
 	// 	employees.weeks.push({
 	// 	 "dayName":	b.weeks[0].daysOfWeek[0].dayName
 	// 	 });
 	// 	});
 	//    console.log(employees.weeks.toString());
		// console.log(v.lastName);
		// console.log(v.firstName);
		// console.log(Array.isArray(v.weeks));
		// var weeks = v.weeks;
		// console.log(weeks);
		
		
		// if( Object.prototype.toString.call(weeks) === '[object Array]' ) {
  //  		 console.log( 'Array!' );
		// 	}

		// var weeksArray = Array.from(weeks);
		//  weeksArray.forEach(function(b){
		//  console.log(b);
		//  });
			
		//console.log(v.weeks.daysOfWeek);
		//start with a default user until I parameterize it.
		return(<TimeSheetContainer/>);
	}

}

 //var timesheet = [];

// {
// 	firstName:"Shemi",
// 	lastName:"Oliver",
// 	weeks: [
// 		{
// 			id:"week1",
// 			daysOfWeek :
// 			[ 
// 			{ 
// 				dayName: "Monday",
// 				hours : 8,
// 				id : 1,
// 				inOut : "in"

// 			 },
// 				{ 
// 				dayName: "Tuesday",
// 				hours : 8,
// 				id : 2,
// 				inOut : "in"

// 			 },
// 			 	{ 
// 				dayName: "Wednesday",
// 				hours : 8,
// 				id : 3,
// 				inOut : "in"

// 			 },
// 			 	{ 
// 				dayName: "Thursday",
// 				hours : 8,
// 				id : 4,
// 				inOut : "in"

// 			 },
// 			 	{ 
// 				dayName: "Friday",
// 				hours : 8,
// 				id : 5,
// 				inOut : "out"

// 			 }
// 			]
// 		}
// 		]
// 	};