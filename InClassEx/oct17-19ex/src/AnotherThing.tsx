import { useState } from "react";

function CountButton()
{
    const [count, incrementCount] = useState(1);
    return(
        <div>
            <button onClick={() => incrementCount((count+1)*2)}>
                Count: {count}</button>
        </div>);
}

function AreaCalculations()
{
    const[length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [areaValue, setArea] = useState(0);

    function calculateArea()
    {
        function AreaCalculate()
        {
            setArea(length*width);
        }
        AreaCalculate();
    }

    return(
    <div>
        <p> Length: </p>
        <input value={length} type="number" onChange={(event) =>
            setLength(Number(event.target.value))}/>
        <p> Width: </p>
        <input value={width} type="number" onChange={(event) =>
            setWidth(Number(event.target.value))}/>
        <button onClick={calculateArea}> Area: {areaValue} </button>
        <button onClick={() => calculateArea()}> Area but Long: {areaValue} </button>
        <AreaButton areaToDisplay={areaValue} onC={() => calculateArea()}/>
    </div>);
}

function UpdateTextField()
{``
    const [inputValue, updateVar] = useState(0);
    const [outputValue, doubleValue] = useState(0);

    return(
    <div>
        <p> Input value: </p>
        <input value={inputValue} type="number" onChange={(event) => 
            updateVar(Number(event.target.value))}/>
        <p> Output value: </p>
        <input value={outputValue} type="number"/>
        <button onClick={(event) => doubleValue(inputValue*2)}>
             Double Button </button>;
    </div>);
}

function AreaButton({areaToDisplay, onC})
{
    return(
    <div>
        <button onClick={onC}> Seperate Button Function: {areaToDisplay} </button>
    </div>);
}

export {CountButton, UpdateTextField, AreaCalculations};