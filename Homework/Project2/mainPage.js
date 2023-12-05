const express = require('express');
const app = express();
const fs = require('fs');

function start(year) 
{
    //start the server
    app.listen(8000, () => 
    {
    console.log("Application started and Listening on port 8000");
    });

    app.get("/mathmajor*", (request,response) =>
    {
        response.send("<h1>Math Major Schedule Creation</h1>"+ createTable(readFile("./courseCatalog.txt")));
    });

    // holds the logic for generating the plan
    app.get("/generatePlan*", (request,response) =>
    {
        console.log("Method accessed");
        // a 2d array that will hold the original data without the classes
        // that have been selected.
        let removedClassesArray = [];
        // this array holds the classes and the semesters they should
        // be taken in.
        let semesterPlan = [];
        // the string that will contain the output schedule.
        let htmlString = "";
        // import data from the txt file.
        let dataArray = readFile("./courseCatalog.txt");
        console.log(dataArray);
        let counter = 0;
        // cut out classes that aren't being used.
        for (let i = 0; i < dataArray.length; i++)
        {
            if (request.query[i] != "default")
                removedClassesArray[i-counter] = dataArray[i];
            else
                counter++;
        }

        // the absolutly massive for loop that fills out the semester plan array
        for(let i = 0; i < removedClassesArray; i++)
        {
            
        }

        // display information on the page.
        response.send("<h3>4 Year Plan:</h3>" + htmlString);
    });

    // reads in the file and returns a 2d array formated for a table.
    function readFile(fileString)
    {
        const data = fs.readFileSync(fileString, {encoding: 'utf8'});
        // create an array with each element being all the data for a specific class.
        let dataArray = data.split("\n");
        let tableArray = [];
        // split the data up into seperate arrays for the data for each class.
        for(let i = 0; i < dataArray.length; i++)
        {
            tableArray[i] = dataArray[i].split("\t");
        }

        return(tableArray);
    }

    function createTable(tableArray)
    {
        
        // creating the table: 
        // initlaize and create row for headings
        // and create a form for the submit and radio buttons
        let table = "<form action='/generatePlan' method='GET'>" + 
        "<table border='2'>" +
        "<tr>" +
            "<th>Class Code</th>" +
            "<th>Class Name</th>" +
            "<th>Already taken</th>"
        "</tr>";

        // iterate through for each row needed
        for (let i = 0; i < tableArray.length; i++)
        {
            table += "<tr>";
            // iterate through for each column needed
            for (let j = 2; j < tableArray[0].length-1; j++)
            {
                table += "<td>" + tableArray[i][j] + "</td>";
            }
            // the radio button for the final column, set the id to
            // equal the class code
            table += "<td><input type='checkbox' value='default' id=" + tableArray[i][2] + " name=" + i + "></td>"
            table += "</tr>";

        }
        table += "</table>";
        // a submit button
        table += "<input type='submit' value='Submit' id='submit'></form>";
        return(table);
    }
}

exports.start = start;