import { useState } from "react"

// This function just displays the information at the top
// of the webpage like who's turn it is or how many points they have.
function GameInfo()
{
    return(
        <div>
            <h4>Matching!</h4>
            <p>It is player 1's turn!</p>
            <p>Player 1: 0 points</p>
            <p>Player 2: 0 points</p>
        </div>
    )
}

// This function creates the table that the cards are displayed in.
function CreateCards()
{
    const cardRows:number=4;
    const cardCols:number=5;
    let emptyStrings = [];
    //nested for loops filling in the values array
    for(let i = 0; i < cardRows; i++)
    {
        emptyStrings[i] = [0];
        for(let j = 0; j < cardCols; j++)
        {
            emptyStrings[i][j] = "l";
        }
    }
    //returns the table using a map of the values array
    return(
    <div>
        <table border="2">
            <tbody>
                {emptyStrings.map((items, index) => ReturnRow(items, index))}
            </tbody>
        </table>
    </div>);
}

//a function used in mapping the rows of the table
function ReturnRow(array, index)
{
    return <tr>
        {array.map((subitem) => 
        (<td><button class="card" key={index}>{subitem}</button></td>))}
        </tr>
}

// This function has the guess button and a lot of the logic
// that goes with it.
function GuessButton()
{
    return(
        <div>
            <button>Guess!</button>
        </div>
    )
}

export {GameInfo, CreateCards, GuessButton}