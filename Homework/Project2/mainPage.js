const express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');

function start(route, handle) 
{
    //start the server
    app.listen(8000, () => 
    {
    console.log("Application started and Listening on port 8000");
    });

    app.get("/mathmajor*", (request,response) =>
    {
        response.send("<h1>Math Major Schedule Creation</h1>"+ createTable());
    });

    app.get("/generatePlan", (request,response) =>
    {
        console.log("Method accessed");
        response.send("<p>hello</p>");
    });

    function readFile(fileString)
    {
        const data = fs.readFileSync(fileString, {encoding: 'utf8'});
        return(data);
    }

    function createTable()
    {
        let data = readFile("./courseCatalog.txt");
        // create an array with each element being all the data for a specific class.
        let dataArray = data.split("\n");
        let tableArray = [];
        // split the data up into seperate arrays for the data for each class.
        for(let i = 0; i < dataArray.length; i++)
        {
            tableArray[i] = dataArray[i].split("\t");
        }

        // creating the table: 
        // initlaize and create row for headings
        // and create a form for the submit and radio buttons
        let table = "<form action='/generatePlan' method='GET'>" + 
        "<table border='2'>" +
        "<tr>" +
            "<th>Earliest Year</th>" +
            "<th>Semester Offered</th>" +
            "<th>Class Code</th>" +
            "<th>Class Name</th>" +
            "<th>Years offered</th>" +
            "<th>Already taken</th>"
        "</tr>";

        // iterate through for each row needed
        for (let i = 0; i < tableArray.length; i++)
        {
            table += "<tr>";
            // iterate through for each column needed
            for (let j = 0; j < tableArray[0].length; j++)
            {
                table += "<td>" + tableArray[i][j] + "</td>";
            }
            // the radio button for the final column, set the id to
            // equal the class code
            table += "<td><input type='checkbox' id=" + tableArray[i][2] + " name=" + i + "></td>"
            table += "</tr>";

        }
        table += "</table>";
        // a submit button
        table += "<input type='submit' value='Submit' id='submit'></form>";
        return(table);
    }
}

exports.start = start;