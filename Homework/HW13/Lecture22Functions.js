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

        fileString = "." + url.parse(request.url).pathname + ".txt"
        if (fileString != './favicon.ico.txt')
        {
            fileData = readFile(fileString);
            response.write(stringList(fileData));
            console.log(fileData);
            writeFile("ResultFile.txt", fileData)
        }
        else
        {
            console.log("There is a favicon request.");
        }

    }
}

function readFile(fileString)
{
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

function writeFile(fileName, data)
{
    fs.appendFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
    });
}

exports.start = start;