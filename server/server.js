var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
	var headers = request.headers;
	var method = request.method;
	var url = request.url;
	var body = [];

	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Credentials', true);
	response.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	console.log(url);
	
	request.on('error', function(err) {
	// This prints the error message and stack trace to `stderr`.
	console.error(err.stack);
	response.statusCode = 400;
	response.end();

});


	//body = Buffer.concat(body).toString();
	// at this point, `body` has the entire request body stored in it as a string
	response.on('error', function(err) {
		console.error(err);
	});

	switch(method){
		case "GET" :
		if (url === "/BoxingRecords"){
			getBoxingRecords(request, response);
		}
		else
		{
			response.statusCode = 404;
			response.end();
		}
		break;

		default :
		response.statusCode = 404;
		response.end();
		
		break;

	}

	
});

function getBoxingRecords(request, response)
{
	console.log("entering getBoxingRecords");
	response.statusCode = 200;
	response.setHeader('Content-Type', 'application/json');
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})


    var boxRecs = fs.readFileSync("/Users/akporodeshemi/Development/Aziza/web/BoxingRecord.txt",'utf8')
    .trim()
    .split('\n')
    .map(line => line.trim().split('\t'))
    .reduce((boxingRecords, line) => {
    	boxingRecords.push({
    		No: line[0],
    		result: line[1],
    		record: line[2],
    		opponent: line[3],
    		type: line[4],
    		roundTime: line[5],
    		date: line[6],
    		location: line[7],
    		notes: line[8]
    	})
    	return boxingRecords
    }, []);

//console.log('output', JSON.stringify(output,null,2));
//console.log('output', output);
var boxingsRecords = {
	boxingsRecords : boxRecs
}

response.write(JSON.stringify(boxingsRecords));
response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))

    // END OF NEW STUFF
}


server.listen(8080);




