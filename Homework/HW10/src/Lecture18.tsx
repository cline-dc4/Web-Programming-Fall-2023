import data from './University.json';
import { useState } from "react";

function ShowName()
{
    function CreateTable()
    {
        //the headers of the table in an array
        let header = Object.keys(data[0]);
        //returns the table using a map of the values array
        return(
        <div>
            <table border="2">
                <thead>
                    <tr>
                        <th>{header[0]}</th><th>{header[1]}</th><th>{header[2]}</th>
                        <th>{header[3]}</th><th>{header[4]}</th><th>{header[5]}</th>
                    </tr>
                </thead>
                <tbody>
                    {schools.map((items, index) => ReturnRow(items))}
                </tbody>
            </table>
        </div>);
    }

    //a function used in mapping the rows of a table
    function ReturnRow(array)
    {
        array.splice(0, array.length-1);
        return <tr>
            {array.map((subitem) => 
            (<td key = {subitem}>{subitem}</td>))}
            </tr>
    }

    //ReadFile();
    const[Output, setOutput] = useState("Unknown");
    const[schools, setSchools] = useState([]);
    return (
        <div>
            <h1>DC</h1>
            <h2>HW10</h2>

            <button onClick={() => setOutput(ReadFile())}> Read File </button>
            <p>{Output}</p>
            <ul>{schools.map((item,index) => (<p>{index} : {item}</p>))}</ul>

            <button onClick={() => setSchools(ReadFile())}>table</button>
            <CreateTable/>
        </div>
    )
}

function ReadFile()
{
    let array = [];
    for(let i = 0; i < data.length; i++)
    {
        array[i] = Object.values(data[i]);
        console.log(array[i]);
    }
    
    console.log("Number items: " + array.length);
    console.log("Key names: " + Object.keys(data[0]));
    let keys = Object.keys(data[0]);
    console.log("Length of values: " + keys.length);
    return array;
}

export {ShowName};