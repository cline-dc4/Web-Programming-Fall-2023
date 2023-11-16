
function runServer()
{
    let url = require("url");
    let http = require("http");
    let functions = require("./functions")

    http.createServer((request, response) => 
    printResults(request, response)).listen(4200);

    function printResults(request, response)
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<h1> Lecture 21 </h1>");
        response.write(functions.printHello());
        if(url.parse(request.url).pathname.includes("CountVowels") == true)
        {
            response.write(functions.wordFunction(request.url));
        }
        else if(url.parse(request.url).pathname.includes("Reverse") == true)
        {
            response.write(functions.reverseWord(request.url));
        }
        else
        {
            response.write("<p>Error: No instruction found</p>")
        }
        console.log("Pathname in main page: " + url.parse(request.url).pathname);
        response.end();
    }
}

exports.runServer = runServer;