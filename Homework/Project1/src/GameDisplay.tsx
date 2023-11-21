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
// an array starting with 20 falses to edit the isMatched array
let editIsMatched = [false, false, false, false, false,
    false, false, false, false, false,
    false, false, false, false, false,
    false, false, false, false, false];
// a number that is used for card logic
let firstSelectedCardNum = -1;
// a number that is used for card logic
let firstSelectedId = -1;
// a number that is used for card logic
let secondSelectedCardNum = -1;
// a number that is used for card logic
let secondSelectedId = -1;

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
    const [isMatched, setIsMatched] = useState(editIsMatched);    
    // a usestate boolean that disables the onClick while it is timed out.
    const [isTimedOut, setIsTimedOut] = useState(false);
    // An array of values between 0 and 10 that determine the image.
    const [imageNumbers, setImageNumbers] = useState<Array<Number>>(editImageNumbers);    

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

    // This function creates a button that prints out the randomized array
    // to the console.
    function DebugButton()
    {
        return(
            <>
                <button onClick={() => console.log(randomArray)}>Debug</button>
            </>
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
                cardNum={subitem+1}
                id={i}
                src={imageArray[imageNumbers[i++]]}
                onClick={(event) => cardPress(event)}>
            </img></td>))}
            </tr>
    }

    // This function handles logic when a card is pressed.
    function cardPress(event)
    {   
        // disable cardPress if the card has been matched or if it is timed out
        if(!isTimedOut && !isMatched[event.target.getAttribute('id')])
        {
            // if the second card hasn't been selected and it is not the same as the first
            // selected card, continue.
            if(secondSelectedId == -1 && event.target.getAttribute('id') != firstSelectedId)
            {
                editImageNumbers[event.target.getAttribute('id')] = 
                    event.target.getAttribute('cardNum');
                setImageNumbers(editImageNumbers)
                // if none selected, setFirstSelected and allow user
                // to select the second card
                if(firstSelectedId == -1)
                {
                    firstSelectedId = (Number(event.target.getAttribute('id')));
                    firstSelectedCardNum = (Number(event.target.getAttribute('cardNum')));
                }
                // if second card is selected, check for match and fill in secondSelected
                else
                {
                    secondSelectedId = (Number(event.target.getAttribute('id')));
                    secondSelectedCardNum = (Number(event.target.getAttribute('cardNum')));
                    // if match:
                    if(firstSelectedCardNum == secondSelectedCardNum)
                    {
                        // change states of the cards that have matches
                        editIsMatched[firstSelectedId] = true;
                        editIsMatched[secondSelectedId] = true;
                        setIsMatched(editIsMatched);
                        // award point
                        if(playerTurn == 0)
                            setPlayerOnePoints(playerOnePoints + 1)
                        else
                            setPlayerTwoPoints(playerTwoPoints + 1)
                        
                        // check if everything is matched
                        setIsTimedOut(true)
                            setTimeout(() => {
                            let end = true;
                            for(let i = 0; i < isMatched.length; i++)
                            {
                                if(isMatched[i] == false)
                                    end = false;
                            }
                            // if everything is matched, then end game
                            if(end)
                                gameEnd();
                            setIsTimedOut(false);
                        }, 100)
                        // advance turn
                        setPlayerTurn(((playerTurn+1)%2))
                        // reset default values
                        firstSelectedCardNum = (-1);
                        firstSelectedId = (-1);
                        secondSelectedCardNum = (-1);
                        secondSelectedId = (-1);
                    }
                    // if not a match:
                    else
                    {
                        // pause for three seconds
                        setIsTimedOut(true)
                        setTimeout(() => {
                            // flip cards back over
                            editImageNumbers[firstSelectedId] = 0;
                            editImageNumbers[secondSelectedId] = 0;
                            setImageNumbers(editImageNumbers);
                            // advance turn
                            setPlayerTurn(((playerTurn+1)%2))
                            // reset default values
                            firstSelectedCardNum = (-1);
                            firstSelectedId = (-1);
                            secondSelectedCardNum = (-1);
                            secondSelectedId = (-1);
                            setIsTimedOut(false)
                        }, 3000);
                    }
                }
            }
        }
    }

    // handles all the logic for when the game is ended.
    function gameEnd()
    {
        if(playerOnePoints > playerTwoPoints)
            alert("Player one won! The score is:\n" +
                "Player 1: " + playerOnePoints + "\n" +
                "Player 2: " + playerTwoPoints)
        else if(playerOnePoints < playerTwoPoints)
            alert("Player two won! The score is:\n" +
                "Player 1: " + playerOnePoints + "\n" +
                "Player 2: " + playerTwoPoints)
        else if(playerOnePoints == playerTwoPoints)
            alert("Tie! The score is:\n" +
                "Player 1: " + playerOnePoints + "\n" +
                "Player 2: " + playerTwoPoints)
    }

    return (
        <>
            <GameInfo/>
            <CreateCards/>
            <DebugButton/>
        </>
    )
}

// this function produces a 2D array with two of each number 0-9
// randomly assigned to indices.
function randomizeArray()
{
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
    return(returnArray)
}
export {CreateBoard}