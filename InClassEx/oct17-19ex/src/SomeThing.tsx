import { useState } from "react";
function Greeting()
{
    return <h1> Lecture 14 and 15 </h1>;
}

function List()
{
    return(
        <div>
            <h2> List of items </h2>
            <ul>
                <li onClick={() => alert("1")}> item1 </li>
                <li onClick={() => alert("2")}> item2 </li>
                <li onClick={() => alert("3")}> item3 </li>
                <li onClick={() => alert("4")}> item4 </li>
                <li onClick={() => alert("5")}> item5 </li>
            </ul>
        </div>)
}

function Buttons()
{
    const [counter, setCount] = useState(0)
    return(
        <div>
            <button id="alertButton" onClick={() => alert("It works...")}>
                Display alert </button>
            <button id="consoleButton" onClick=
                {(event) => GetLocation(event)}>Display coordinates</button>
            <button id="countB" onClick={() => setCount(counter + 1)}>
            Count: {counter} </button>
        </div>);
}

function DisplayAll()
{
    return(
        <div>
            <Greeting/>
            <Buttons/>
            <List/>
        </div>);
}

function GetLocation(event:MouseEvent)
{
    let locationX = event.screenX;
    let locationY = event.screenY;
    return console.log(locationX + " " + locationY);
}
export default DisplayAll;