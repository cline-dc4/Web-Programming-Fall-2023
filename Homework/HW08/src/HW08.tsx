import { useState } from "react";

function TextFields()
{
    //  definitions for all variables used in the rest of this function.
    const[score1, setScore1] = useState(0);
    const[score2, setScore2] = useState(0);
    const[score3, setScore3] = useState(0);
    const[score4, setScore4] = useState(0);
    const[score5, setScore5] = useState(0);
    const[average, setAverage] = useState(0);
    const[highestScore, setHighest] = useState(0);

    //  This function calculates the average score of all numbers entered
    //  in the input text fields.
    function calculateAverage()
    {
        setAverage((score1+score2+score3+score4+score5)/5);
    }

    //  This would have been a lot easier with an array...
    //  This function sets the highestScore to whichever text field
    //  has the highest score in it.
    function findHighestScore()
    {
        setHighest(score1);
        if (score2 > highestScore)
        {
            setHighest(score2)
        }
        if (score3 > highestScore)
        {
            setHighest(score3)
        }
        if (score4 > highestScore)
        {
            setHighest(score4)
        }
        if (score5 > highestScore)
        {
            setHighest(score5)
        }
    }

    
    //  This section contains all the HTML to format the buttons,
    //  text fields, and labels.
    return(
    <div>
        <p>Score 1:</p>
        <input type="number" value={score1} onChange={(event) =>
            setScore1(Number(event.target.value))}></input>

        <p>Score 2:</p>
        <input type="number" value={score2} onChange={(event) =>
            setScore2(Number(event.target.value))}></input>

        <p>Score 3:</p>
        <input type="number" value={score3} onChange={(event) =>
            setScore3(Number(event.target.value))}></input>

        <p>Score 4:</p>
        <input type="number" value={score4} onChange={(event) =>
            setScore4(Number(event.target.value))}></input>    

        <p>Score 5:</p>
        <input type="number" value={score5} onChange={(event) =>
            setScore5(Number(event.target.value))}></input>    
        <br/>

        <button onClick={() => calculateAverage()}> Average </button> 
        <input type="number" value={average} readOnly></input>
        <br/>

        <button onClick={() => findHighestScore()}> Find highest </button>
        <input type="number" value={highestScore} readOnly></input>
    </div>);
}

function DisplayAll()
{
    return(
    <div>
        <TextFields/>
    </div>);
}
export default DisplayAll;