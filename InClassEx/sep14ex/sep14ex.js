class Snack
{
    //Constructor
    constructor()
    {
        this.name = "";
        this.price = 0;
        this.calories = 0;
    }
    // Example function
    printInformation()
    {
        return "Name: " + this.name +
        "\nPrice: " + this.price + "\nCalories: " + this.calories
    }
}

function createObject()
{
    var myObject = new Snack();
    myObject.name = document.getElementById("nameTF").value
    myObject.price = document.getElementById("priceTF").value
    myObject.calories = document.getElementById("calorieTF").value
    alert(myObject.printInformation());
}
// Function to create array of size 10
function createArray()
{
    //enter number in first tf then it will create alerts with
    //values multiplied by 10
    var array = [1, 2, 3, 4, 5]
    array.length = document.getElementById("lengthTF").value;
    for (var i = 0; i < array.length; i++)
    {   
        array[i] = i * 10
        alert(array[i]);
    }


    var numberTFArray = document.getElementsByClassName("inputClass");
    for (var i = 0; i < numberTFArray.length; i++)
    {
        array[i] = numberTFArray[i].value;
        alert(array[i]);
    }
}