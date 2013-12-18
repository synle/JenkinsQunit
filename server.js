// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
		var qs = require('querystring');
		if (request.method == 'POST') {
			var data = "";

			request.on("data", function (chunk) {
				data += chunk;
			});

			request.on("end", function () {
				var json = qs.parse(data);

				console.log("raw: " + data);
				console.log("json: " + JSON.stringify(json));

				response.writeHead(200, {
					"Content-Type" : "text/plain"
				});
				response.end();

				//write to file
				var fs = require('fs');
				fs.writeFile("output.xml", JSON.stringify(json), function (err) {
					if (err) {
						console.log(err);
					} else {
						console.log("The file was saved!");
					}

					//closing the server
					console.log('about to close a server');
					process.exit();
				});
			});
		}
	});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
