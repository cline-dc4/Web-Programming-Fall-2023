const express = require('express');
const app = express();

function start(route, handle) 
{
    //start the server
    app.listen(8888, () => 
    {
    console.log("Application started and Listening on port 8888");
    });

    // if the url has nothing extra
    app.get("/", (request,response) =>
    {
        console.log("Method accessed")
        response.send("<h1>Lecture24</h1>");
    });

    // url has /foods
    app.get("/foods", (request,response) =>
    {
        console.log("Hello!");
        response.send
        (
            "<ul>" +
                "<li> Ham </li>" +
                "<li> Green Bean Cassorole </li>" +
                "<li> Sweet Potato Marshmello Cassorole </li>" +
                "<li> Mashed Potatoes </li>" +
            "</ul>"
        )
    });

    // url has /movies
    app.get("/movies", (request,response) =>
    {
        response.sendFile("D:/GitHub/Web-Programming-Fall-2023/Homework/HW15/Movies.html");
    });

    app.get("localhost:8888/input.html", (request,response)=>
    {
        response.sendFile("D:/GitHub/Web-Programming-Fall-2023/Homework/HW15/UserInputs.html");
    });

    app.get("/processData", (request,response) =>
    {
        console.log(request.query.costPerItem);
        console.log(request.query.numItems);
        console.log(request.query.dollars);
        console.log(request.query.rupees);
        console.log(request.query.submit);

        if(request.query.dollars == "on")
            response.send
            (
                "<p>Price in dollars: " + 
                (request.query.costPerItem*request.query.numItems) + "</p>"
            )

        if(request.query.rupees == "on")
            response.send
            (
                "<p>Price in dollars: $" + 
                (request.query.costPerItem*request.query.numItems) + "</p>"
            )
    });
}

exports.start = start;