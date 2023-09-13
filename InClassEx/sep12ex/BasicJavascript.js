function sumOf10Numbers()
{
    var counter = 0;
    var sum = 0;
    for (counter = 0; counter <= 10; counter++)
    {
        sum += counter;
    }
    document.getElementById("resultH4").innerHTML 
    = "The answer is: " + sum;   
}

function sumOfNumbers()
{
    var maxNumber = document.getElementById("maxNumberText").value;
    var counter = 0;
    var sum = 0;
    for (counter = 0; counter <= maxNumber; counter++)
    {
        sum += counter;
    }
    document.getElementById("userInputSum").innerHTML 
    = "The answer is: " + sum;
}