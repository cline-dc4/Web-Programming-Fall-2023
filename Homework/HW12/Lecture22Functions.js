let fs = require('fs');
let http = require("http");
let url = require("url");

function start()
{
    http.createServer((request, response) => 
    printResults(request, response)).listen(8001);

    function printResults(request, response)
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<h1> Lecture 22 </h1>");
        fileData = readFile(request);
        response.write(stringList(fileData));
        console.log(fileData);
    }
}

function readFile(request)
{
    fileString = "." + url.parse(request.url).pathname + ".txt";
    const data = fs.readFileSync(fileString, {encoding: 'utf8'});
    // console.log(data);
    return(data);
}

function stringList(string)
{
    let newlineArray = String(string).split('\n');
    let tempStringArray = [];
    listString = "<dl>";
    for (let i = 0; i < newlineArray.length; i++)
    {
        tempStringArray = newlineArray[i].split(',');
        listString += "<dd>" + tempStringArray[0] + "</dd>"
        for (let j = 1; j < tempStringArray.length; j++)
        {
            listString += "<dt>" + tempStringArray[j] + "</dt>"
        }
    }
    listString += "</dl>";
    return(listString);
}

exports.start = start;