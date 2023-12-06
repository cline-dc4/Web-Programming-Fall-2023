const express = require('express');
const app = express();
const fs = require('fs');

function start(year) 
{
    //start the server
    app.listen(8888, () => 
    {
    console.log("Application started and Listening on port 8888");
    });

    // Dr. Thomas's code
    app.get("/myplan", (req, res) =>
	{
		let htmlString = "<html><head><title>CS major</title></head><body>";
		htmlString += "<h3> Welcome to Corban!</h3>";
	htmlString += "<form action = 'http://localhost:8888/mathmajor' method = 'GET'>";
		htmlString += "<label> When do you plan to start? </label><input type='number' name='year'></br>";
		htmlString += "<label> Pick a major: </label><select name='major'>";
        htmlString += "<option value='cs'>Computer Science</option>";
		htmlString += "<option value='math'>Mathematics</option></select><br>";
		htmlString += "<input type='submit' /></br>";
		htmlString += "</form></body></html>";
		res.send(htmlString);
	});


    app.get("/mathmajor*", (request,response) =>
    {
        response.send("<h1>Math Major Schedule Creation</h1>"+ createTable(readFile("./courseCatalog.txt")));
    });

    // holds the logic for generating the plan
    app.get("/generatePlan*", (request,response) =>
    {
        // true if odd year, false if even year
        let isOddYear = Boolean(year%2);
        // a dictionary that will hold the original data without the classes
        // that have been selected.
        let classDict = [];
        // this array holds the classes and the semesters they should
        // be taken in.
        let semesterPlan = {};
        // the string that will contain the output schedule.
        let htmlString = "";
        // import data from the txt file.
        let dataArray = readFile("./courseCatalog.txt");
        // used in following for loop to avoid skipping indices in the array.
        let counter = 0;
        // cut out classes that aren't being used and create a dictionary.
        for (let i = 0; i < dataArray.length; i++)
        {
            
            if (request.query[i] != "default")
            // add essenially an object to each index of the array 
            // if it's not being excluded.
                classDict[i-counter] = 
                {
                    earliestYear: dataArray[i][0],
                    season: dataArray[i][1],
                    classCode: dataArray[i][2],
                    className: dataArray[i][3],
                    oddEvenYear: dataArray[i][4]
                };
            else
                counter++;
        }
        console.log(classDict);
        console.log(classDict.length);

        // the for loop that fills out the semester plan array
        for(let i = 0; i < classDict.length; i++)
        {
            // year 1
            if(classDict[i].earliestYear == 1)
            {
                console.log("year1");
                // year 1 fall
                if((classDict[i].season == 'B' || classDict[i].season == 'F') &&
                    [(isOddYear && [classDict[i].oddEvenYear == 'A\r' 
                    || classDict[i].oddEvenYear == 'O\r']) || (!isOddYear &&
                    [classDict[i].oddEvenYear == 'A\r' || classDict[i].oddEvenYear == 'E\r'])])
                {
                    console.log(classDict[i].className);
                }
            }
            // year 2
            if(classDict.earliestYear == 2)
            {

            }
            // years 3 and 4
            if(classDict.earliestYear >= 3)
            {

            }
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