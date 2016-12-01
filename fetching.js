
var endpoint = "/boxingRecords";

//simple use of fetch api
fetch(endpoint)
.then(function(response)
{
  console.log(response.status);
});


//fetch with catch clause
fetch(endpoint)
.then(function(response){
    console.log(response.url);
}).catch(function(error){
    console.error("error " + error);
});


//fetch with json and catch clause
fetch(endpoint)
.then(function(response){

	response.json()
	.then(function(data){
		console.log("logging resolved json data " + data);
	});
}).catch(function(error){
	console.error("Fetch error - " + error);
});


//fetch with separate status, json functions, leaving you with your final data and error 
//define status resuable status function, json function.

function status(response){
	if(response.status === 200)
	{
		return Promise.resolve(resolve)
	}
	else {
		return Promise.reject(new Error(response.statusText))
	}

}

function json(response){}
	return response.json()
}

fetch(endpoint)
.then(status)
.then(json)
.then(function(data){
	console.log("final data "  + data);
}).
catch(function(error){
    console.error("Fetch error " + error);
});