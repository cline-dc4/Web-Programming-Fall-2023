import { useState } from "react"
import raw from "./Hobbies.txt"

//a function that creates a table of values
function CreateTable()
{
    let values = [];
    //nested for loops filling in the values array
    for(let i = 0; i < 3; i++)
    {
        values[i] = [0];
        for(let j = 0; j < 5; j++)
        {
            values[i][j] = String.fromCharCode(65+(i*3+j));
        }
    }
    //the headers of the table in an array
    let header = ["First", "Second", "Third", "Fourth", "Fifth"];
    //returns the table using a map of the values array
    return(
    <div>
        <table border="2">
            <thead>
                <tr>
                    <th>{header[0]}</th><th>{header[1]}</th>
                    <th>{header[2]}</th><th>{header[3]}</th><th>{header[4]}</th>
                </tr>
            </thead>
            <tbody>
                {values.map((items, index) => ReturnRow(items))}
            </tbody>
        </table>
    </div>);
}

//a function used in mapping the rows of the table
function ReturnRow(array)
{
    return <tr>
        {array.map((subitem) => 
        (<td key = {subitem}>{subitem}</td>))}
        </tr>
}

//a function that will take in a list of hobbies from a text file
//and print out the least favorite hobby
function PrintWords()
{
    //an array that will be filled by parseData from the txt file.
    let words = []
    const[leastFavorite, updateWord] = useState("Unknown");

    //reads in the text file then parses it using parseData.
    function readData()
    {
        fetch(raw).then(r => r.text()).then(text => (parseData(text)))
    }

    //fills out the array from the txt file and calls updateWord to
    //give the least favorite hobby
    function parseData(text)
    {
        words = text.split("\n");
        updateWord(words[4])
    }

    //places a button and a paragraph stating which hobby is the
    //least favorite on the webpage.
    return(
    <div>
        <button onClick = {() => readData()}> Read File </button>
        <p>Least Favorite Hobby: {leastFavorite}</p>
    </div>)
}

export {CreateTable, PrintWords};