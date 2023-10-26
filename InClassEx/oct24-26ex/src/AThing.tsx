import { useState } from "react";
function CreateList()
{
    let values = ["A", "B", "C", "D", "E"];
    return(
    <div>
        <h3> Single List </h3>
        <ul>
            {values.map((item) =>
            (<li key={item} value={item} onClick={() => 
            console.log({item})}>
            {item} </li>))}
        </ul>
    </div>)
}

function CreateListWithState()
{
    let values = ["A", "B", "C", "D", "E"];
    const [itemSelected, updateSelection] = useState("Not selected");
    return(
    <div>
        <h3> A list with a state </h3>
        <ul>
            {values.map((item) => (<li key={item} value={item}
            onClick={() => updateSelection(item)}>{item}</li>))}
        </ul>
        <p> Item selected: {itemSelected} </p>
    </div>)
}

function ReturnList(items, index)
{
    return(
    <div>
        <h4> Array: {index} </h4>
        {items.map((item) => (<li key={item} value={item}>
        {item}</li>))}
    </div>)
}
function CreateListOfLists()
{
    let arrayOfNumbers = [];
    for(let i = 0; i < 3; i++)
    {
        arrayOfNumbers[i] = [0];
        for (let j = 0; j < 5; j++)
        {
            arrayOfNumbers[i][j] = (i*j);
        }
    }
    return(
    <div>
        <h3> A list within lists </h3>
        {arrayOfNumbers.map((items, index) => 
        ReturnList(items, index))}
    </div>);
    let values = ["A", "B", "C", "D", "E"];

}

export {CreateList, CreateListWithState, CreateListOfLists};