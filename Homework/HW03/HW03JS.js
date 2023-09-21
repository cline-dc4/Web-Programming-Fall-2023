//Class Description
class VideoGame
{
    //constructor
    constructor()
    {
        this.name = "";
        this.numSold = 0;
        this.rating = 0.0;
        this.genre = "";
    }

    //essentially a toString method
    printInformation()
    {
        return "Name: " + this.name + "\n Copies Sold: " + this.numSold +
        "\n Rating: " + this.rating + "\n Genre: " + this.genre;
    }

    //initializes the variables in the object.
    createGame()
    {
        this.name = document.getElementById("name").value;
        this.numSold = document.getElementById("copiesSold").value;
        this.rating = document.getElementById("rating").value;
        this.genre = document.getElementById("genre").value;
    }
}

//a global variable for the first VideoGame object
var game1 = new VideoGame();
//a global variable for the second VideoGame object
var game2 = new VideoGame();

//fills in information for game1 from the textfields.
function createGame(input)
{
    if(input == 1)
        game1.createGame();
    else
        game2.createGame();
}

//prints out the correct game and fills in the information into a textfield.
function printGame(input)
{
    if(input == 1)
        document.getElementById("printOutput1").value = game1.printInformation()
    else
        document.getElementById("printOutput2").value = game2.printInformation()
}

//compares NumSold on both objects and shows which one is larger
//in a textfield.
function compareInt()
{
    if(game1.numSold > game2.numSold)
    {
        document.getElementById("compareInt").value =
            "Game 1: " + game1.numSold;
    }
    else
    {
        document.getElementById("compareInt").value =
            "Game 2: " + game2.numSold;
    }
}

//finds the average rating between the two games and adds it to a textfield.
function averageRating()
{
    var average = (Number(game1.rating) + Number(game2.rating))/2;
    document.getElementById("average").value =
        "Average Rating: " + average;
}