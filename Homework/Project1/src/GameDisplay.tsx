import { useState } from "react";
// imports for the images used for the cards
import cardBack from "./cardImages/cardback.png";
import dewott from "./cardImages/dewott.jpg";
import dragonair from "./cardImages/dragonair.jpg";
import flareon from "./cardImages/flareon.jpg";
import happiny from "./cardImages/happiny.jpg";
import munchlax from "./cardImages/munchlax.jpg";
import ninetales from "./cardImages/ninetales-alolan.jpg";
import solgaleo from "./cardImages/solgaleo.jpg";
import swablu from "./cardImages/swablu.jpg";
import togekiss from "./cardImages/togekiss.jpg";
import umbreon from "./cardImages/umbreon.jpg";

// All the global variables
// ------------------------
// initializing an array that holds image objects for the cards.
let imageArray:Array<String> = [];
// card back
imageArray[0] = cardBack;
// image 1
imageArray[1] = dewott;
// image 2
imageArray[2] = dragonair;
// image 3
imageArray[3] = flareon;
// image 4
imageArray[4] = happiny;
// image 5
imageArray[5] = munchlax;
// image 6
imageArray[6] = ninetales;
// image 7
imageArray[7] = solgaleo;
// image 8
imageArray[8] = swablu;
// image 9
imageArray[9] = togekiss;
// image 10
imageArray[10] = umbreon;
// array that will fill the buttons with random numbers 1-10, two of each.
// the values will coorespond with the imageArray indices
let randomArray:Array<Array<Number>> = randomizeArray()

// an array starting with 20 zeros to edit the imageNumbers array.
let editImageNumbers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// the function that holds everything else and is called by App.tsx
function CreateBoard()
{
    // Determines player turn; 0 for player 1, 1 for player 2
    const [playerTurn, setPlayerTurn] = useState(0);
    // Shows how many points player 1 has.
    const [playerOnePoints, setPlayerOnePoints] = useState(0);
    // Shows how many points player 2 has.
    const [playerTwoPoints, setPlayerTwoPoints] = useState(0);
    // An array of booleans that say whether a given card number is matched
    // or not.
    let isMatched:Array<Boolean> = [];    

    // An array of values between 0 and 10 that determine the image.
    const [imageNumbers, setImageNumbers] = useState<Array<Number>>(editImageNumbers);    
    
    //stores the key of the first card that was selected.
    const [firstSelected, setFirstSelected] = useState(null);
    // stores the key of the second card that was selected.
    const [secondSelected, setSecondSelected] = useState(null);

    // This function just displays the information at the top
    // of the webpage like who's turn it is or how many points they have.
    function GameInfo()
    {
        return(
            <div>
                <h4>Matching!</h4>
                <p>It is player {playerTurn + 1}'s turn!</p>
                <p>Player 1: {playerOnePoints} points</p>
                <p>Player 2: {playerTwoPoints} points </p>
            </div>
        )
    }

    // This function creates the table that the cards are displayed in.
    function CreateCards()
    {
        // is set to -4 so that i can get num from 0 to 19 in the buttons...
        // i know its janky but it works
        let i = -4;
        // returns the table using a map of the values array
        return(
        <div>
            <table border="2">
                <tbody>
                    {randomArray.map((items) => ReturnRow(items, i=i+4))}
                </tbody>
            </table>
        </div>);
    }

    // a function used in mapping the rows of the table
    function ReturnRow(array:Array<Number>, i:Number)
    {
        return <tr>
            {array.map((subitem:Number) => 
            (<td><img 
                class="card"
                id={subitem+1}
                num={i}
                src={imageArray[imageNumbers[i++]]}
                disabled={!isMatched[Number(subitem)]}
                onClick={(event) => cardPress(subitem+1, event)}>
            </img></td>))}
            </tr>
    }

    //This function handles logic when a card is pressed.
    function cardPress(key:Number, event)
    {
        let num = Number(event.target.getAttribute('num'))
        console.log(Number(num))
        editImageNumbers[Number(num)]=key;
        setImageNumbers(editImageNumbers)
        console.log(imageNumbers)
        console.log(event.target);

        setPlayerTurn(((playerTurn+1)%2))
    }

    return (
        <>
            <GameInfo/>
            <CreateCards/>
        </>
    )
}

// this function produces a 2D array with two of each number 0-9
// randomly assigned to indices.
function randomizeArray()
{
    console.log("Randomize");
    // index used in the randomArray and for the while loop.
    let i = 0;
    // a variable used to store the random number to be added.
    let num = 0;
    // used while checking if there are less than 2 of a certain number.
    let counter = 0;
    let tempArray:Array<Number> = [];
    while(i < 20)
    {
        num = (Math.floor(Math.random() * 10) );
        // this switch statement checks the array for the number
        // potentially being added and makes sure there are less
        // than 2 of them before adding and moving to the next index.
        switch(num)
        {
        case 0:
            {
                // loop through and check for duplicate numbers.
                for(let j = 0; j < i; j++)
                {
                    if(tempArray[j] == num)
                    {
                        counter++;
                    }
                }
                // if there are 0 or 1 of this number, add it.
                if(counter < 2)
                {
                    tempArray[i] = num;
                    i++;
                }
                break;
            }
        case 1:
            {
                // loop through and check for duplicate numbers.
                for(let j = 0; j < i; j++)
                {
                    if(tempArray[j] == num)
                    {
                        counter++;
                    }
                }
                // if there are 0 or 1 of this number, add it.
                if(counter < 2)
                {
                    tempArray[i] = num;
                    i++;
                }
                break;
            }   
        case 2:
            {
                // loop through and check for duplicate numbers.
                for(let j = 0; j < i; j++)
                {
                    if(tempArray[j] == num)
                    {
                        counter++;
                    }
                }
                // if there are 0 or 1 of this number, add it.
                if(counter < 2)
                {
                    tempArray[i] = num;
                    i++;
                }
                break;
            } 
        case 3:
            {
                // loop through and check for duplicate numbers.
                for(let j = 0; j < i; j++)
                {
                    if(tempArray[j] == num)
                    {
                        counter++;
                    }
                }
                // if there are 0 or 1 of this number, add it.
                if(counter < 2)
                {
                    tempArray[i] = num;
                    i++;
                }
                break;
            }
        case 4:
            {
                // loop through and check for duplicate numbers.
                for(let j = 0; j < i; j++)
                {
                    if(tempArray[j] == num)
                    {
                        counter++;
                    }
                }
                // if there are 0 or 1 of this number, add it.
                if(counter < 2)
                {
                    tempArray[i] = num;
                    i++;
                }
                break;
            }
        case 5:
            {
                // loop through and check for duplicate numbers.
                for(let j = 0; j < i; j++)
                {
                    if(tempArray[j] == num)
                    {
                        counter++;
                    }
                }
                // if there are 0 or 1 of this number, add it.
                if(counter < 2)
                {
                    tempArray[i] = num;
                    i++;
                }
                break;
            }
        case 6:
            {
                // loop through and check for duplicate numbers.
                for(let j = 0; j < i; j++)
                {
                    if(tempArray[j] == num)
                    {
                        counter++;
                    }
                }
                // if there are 0 or 1 of this number, add it.
                if(counter < 2)
                {
                    tempArray[i] = num;
                    i++;
                }
                break;
            }
        case 7:
            {
                // loop through and check for duplicate numbers.
                for(let j = 0; j < i; j++)
                {
                    if(tempArray[j] == num)
                    {
                        counter++;
                    }
                }
                // if there are 0 or 1 of this number, add it.
                if(counter < 2)
                {
                    tempArray[i] = num;
                    i++;
                }
                break;
            }
        case 8:
            {
                // loop through and check for duplicate numbers.
                for(let j = 0; j < i; j++)
                {
                    if(tempArray[j] == num)
                    {
                        counter++;
                    }
                }
                // if there are 0 or 1 of this number, add it.
                if(counter < 2)
                {
                    tempArray[i] = num;
                    i++;
                }
                break;
            }
        case 9:
            {
                // loop through and check for duplicate numbers.
                for(let j = 0; j < i; j++)
                {
                    if(tempArray[j] == num)
                    {
                        counter++;
                    }
                }
                // if there are 0 or 1 of this number, add it.
                if(counter < 2)
                {
                    tempArray[i] = num;
                    i++;
                }
                break;
            }
        }
        counter = 0;
    }

    let returnArray:Array<Array<Number>> = []
    // loops to transfer the random numbers into the 2D array randomArray.
    let k = 0;
    for(let i = 0; i < 5; i++)
    {
        returnArray[i] = [0];
        for(let j = 0; j < 4; j++)
        {
            returnArray[i][j] = tempArray[k]
            k++
        }
        
    }
    console.log(returnArray)
    return(returnArray)
}
export {CreateBoard}