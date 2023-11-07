console.log("Hello, world!");

let http = require("http");

// create the server connection
http.createServer(function(request, response)
{
    // write the header ifo for thte packet
    response.writeHead(200, {"Content-Type":"text/plain"});
    // content of the response
    response.write("Welcome!");
    // end the response to the request
    response.end();
}).listen(8800);