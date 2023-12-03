const express = require('express');
const app = express();

function start(route, handle) 
{
    //start the server
    app.listen(8000, () => 
    {
    console.log("Application started and Listening on port 8888");
    });

    app.get("/mathmajor", (request,response) =>
    {
        console.log("Method accessed")
        response.send("<h1>Lecture24</h1>");
    });

    function readFile(fileString)
    {
        const data = fs.readFileSync(fileString, {encoding: 'utf8'});
        console.log(data);
        return(data);
    }

    function createTable()
    {
        let data = readFile("./courseCatalog.txt");
        let dataArray = data.split("\t");
        
    }

}

exports.start = start;