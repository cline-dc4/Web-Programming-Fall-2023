
// JSON object for Snack
// String version of a snack object
myFavoriteSnack = {name:"Jalapeno potato chips", price:2.5, calories:500};
ourFavoriteSnacks = [{name:"Bbq frito twists", price:3.99, calories:200}, 
	{name:"Gushers", price:1.29, calories:347}
	];
// Class: Snack
class Snack
{
	// Constructor
	constructor()
	{
		this.name = "";
		this.price = 0;
		this.calories = 10;
	}
	
	// Example function
	printInformation()
	{
		return "Name: " + this.name + 
			" Price: " + this.price + 
			" Calories: " + this.calories + "\n";
	}
	
}

var arrayOfSnacks = [5];
var size = 0;

function createObject(name)
{
	var snackParagraph = document.getElementById("snackP");
		
	if (size < 0)
	{
		arrayOfSnacks[0] = new Snack();
		arrayOfSnacks[0].name = myFavoriteSnack.name;
		arrayOfSnacks[0].price = myFavoriteSnack.price;
		arrayOfSnacks[0].calories = myFavoriteSnack.calories;
		snackParagraph.append(arrayOfSnacks[size].printInformation() + "<br />");
		// Adding from JSON array 
		arrayOfSnacks[1] = new Snack();
		arrayOfSnacks[1].name = ourFavoriteSnacks[0].name;
		arrayOfSnacks[1].price = ourFavoriteSnacks[0].price;
		arrayOfSnacks[1].calories = ourFavoriteSnacks[0].calories;
		//
		
		size++;
	}
	else
	{
		arrayOfSnacks[size] = new Snack();
		
		arrayOfSnacks[size].name = 
			name;///document.getElementById("nameTF").value;
		arrayOfSnacks[size].price = 
			document.getElementById("priceTF").value;
		arrayOfSnacks[size].calories = 
			document.getElementById("calorieTF").value;
		//alert(arrayOfSnacks[size].printInformation());
		//snackParagraph.append(arrayOfSnacks[size].printInformation());
		var newItemP = document.createElement("p");
		newItemP.appendChild(document.createTextNode(arrayOfSnacks[size].printInformation()));
		document.getElementsByTagName("body")[0].appendChild(newItemP);
		size++;
	}
}

function readInputFile()
{
	const fs = require('fs')
 
fs.readFile('InputFile.txt', (err, data) => {
    if (err) throw err;
 
    console.log(data.toString());
});
	//document.getElementbyId("snackP").append(words);
}

function showFile(input) {
  let file = input.files[0];
	file.
  alert(`File name: ${file.name}`); // e.g my.png
  alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824
  let reader = new FileReader();

  alert(reader.readAsText(file));
  
}





