console.log("Hello, world!");

function runServer()
{
    let http = require("http");

    // create the server connection
    http.createServer((request, response) => 
    printGreeting(request, response)).listen(8000);
    
    function printGreeting(request, response)
    {
        // write the header ifo for thte packet
        response.writeHead(200, {"Content-Type":"text/html"});
        // content of the response
        response.write("Welcome!");
        let content = "<html>" + 
        "<head>" +
        "<title> My first Node.js page </title>" +
        "<h1> A random heading! </h1>" +
        "<p> There's a hundered and four days of" +
        " summer vacation, and school comes along just to end it! </p>" +
        "<ol><li>1</li><li>2</li><li>3</li><li>4</li></ol>"
        "</head>" +
        "</html>";
        response.write(content);
        // end the response to the request
        response.end();
    }
}
runServer();