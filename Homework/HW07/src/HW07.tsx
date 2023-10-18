function HelloMessage()
{
    let name = "DC";
    return <h1> Hi! {name}</h1>;
}

function TwoComponents()
{
    return(
        <div>
        <h3>A list</h3>
        <ul>
            <li> Apple </li>
            <li> Banana </li>
            <li> Cherry </li>
        </ul> 
        </div>);
}

function ArrayToOL()
{
    let array = ["Car","Truck", "Bus", "Motorcycle"];
    return(
    <div>
        <h3> Arrays to ordered lists </h3>
        <ol>
            {array.map((vehicle) => (<li key={vehicle}>{vehicle}</li>))}
        </ol>
    </div>);
}

function CreateTable()
{
    let row1Array = [1,2,3];
    let row2Array = [4,5,6];
    return(
        <div>
            <h2>a really boring table</h2>
            <table>
                <tr>
                    {row1Array.map((num) => (<td key={num}>{num}</td>))}
                </tr>
                <tr>
                    {row2Array.map((num) => (<td key={num}>{num}</td>))}
                </tr>
            </table>
        </div>
    );
}

function DisplayAllComponents()
{
    return(
    <div>
        <HelloMessage/>
        <TwoComponents/>
        <ArrayToOL/>
        <CreateTable/>
    </div>);
}

export default DisplayAllComponents();