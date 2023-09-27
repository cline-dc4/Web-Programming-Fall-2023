//functions needed for drag and drop
function allowDrop(event)
{
    event.preventDefault();
}

function drag(event)
{
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event)
{
    event.preventDefault();
    // let data = event.dataTransfer.getData("text");
    // alert(data);
    // let h3String = document.getElementById(data).innerHTML;
    // event.target.innerHTML = h3String;

    let color = event.style;
    event.target.setAttribute("style", color);
}
//end functions needed for drag and drop

//create the table dynamically
function createTable()
{
    let table = document.getElementById("colorTable");
    table.setAttribute("border", "1")
    let rows = []
    let numRows = Number(document.getElementById("numRows").value);
    let numColumns = Number(document.getElementById("numColumns").value);

    for (let i = 0; i < numRows; i++)
    {
        rows[i] = table.insertRow(i)
        for (let j = 0; j < numColumns; j++)
        {
            let cell = rows[i].insertCell();
            cell.setAttribute("style", "width: 40px;height: 40px")
            cell.setAttribute("ondrop", "drop(event)");
        }
    }
}

//resets the table 
function resetTable()
{

}