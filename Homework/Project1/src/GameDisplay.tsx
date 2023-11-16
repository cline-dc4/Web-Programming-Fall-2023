import { useState } from "react";

// All the global variables
// ------------------------
// initializing an array that holds image objects for the cards.
let imageArray:Array<String> = [];
// card back
imageArray[0] = '"cardImages/cardback.png"';
// image 1
imageArray[1] = '"cardImages/dewott.jpg"';
// image 2
imageArray[2] = '"cardImages/dragonair.jpg"';
// image 3
imageArray[3] = '"cardImages/flareon.jpg"';
// image 4
imageArray[4] = '"cardImages/happiny.jpg"';
// image 5
imageArray[5] = '"cardImages/munchlax.jpg"';
// image 6
imageArray[6] = '"cardImages/ninetales-alolan.jpg"';
// image 7
imageArray[7] = '"cardImages/solgaleo.jpg"';
// image 8
imageArray[8] = '"cardImages/swablu.jpg"';
// image 9
imageArray[9] = '"cardImages/togekiss.jpg"';
// image 10
imageArray[10] = '"cardImages/umbreon.jpg"';



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
    const [isMatched, setIsMatched] = useState([]);

    // array that will fill the buttons with random numbers 1-10, two of each.
    // the values will coorespond with the imageArray indices
    const [randomArray, setRandomArray] = useState<Array<Array<number>>>(randomizeArray());
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
        //returns the table using a map of the values array
        return(
        <div>
            <table border="2">
                <tbody>
                    {randomArray.map((items) => ReturnRow(items))}
                </tbody>
            </table>
        </div>);
    }

    //a function used in mapping the rows of the table
    function ReturnRow(array)
    {
        return <tr>
            {array.map((subitem:Number) => 
            (<td><button class="card" key={subitem} 
            onClick={() => cardPress(subitem)}></button></td>))}
            </tr>
    }

    //This function handles logic when a card is pressed.
    function cardPress(key:Number)
    {

    }

    // This function has the guess button and a lot of the logic
    // that goes with it.
    function AdvTurnButton()
    {
        // This function advances the turn and grants points if needed.
        function AdvTurnButtonPress()
        {
            setPlayerTurn(((playerTurn+1)%2));
        }
        return(
            <div>
                <button onClick ={() => AdvTurnButtonPress()}>Guess!</button>
            </div>
        )
    }

    return(
        <>
            <GameInfo/>
            <CreateCards/>
            <AdvTurnButton/>
        </>
    );
}
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
        num = (Math.floor(Math.random() * 10) + 1);
        // this switch statement checks the array for the number
        // potentially being added and makes sure there are less
        // than 2 of them before adding and moving to the next index.
        switch(num)
        {
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
        case 10:
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

    let returnArray = []
    // loops to transfer the random numbers into the 2D array randomArray.
    for(let i = 0; i < 5; i++)
    {
        returnArray[i] = [0];
        for(let j = 0; j < 4; j++)
        {
            returnArray[i][j] = tempArray[i+j]
        }
        
    }
    console.log(tempArray)
    return(returnArray)
}
export {CreateBoard}