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
    let color = event.dataTransfer.getData("text");
    // alert(color);
    event.target.setAttribute("style", "background-color:" + color + 
    ";width: 40px;height: 40px");
}
//end functions needed for drag and drop

//create the table dynamically
function createTable()
{
    let table = document.getElementById("colorTable");
    table.setAttribute("border", "1");
    let rows = [];
    let numRows = Number(document.getElementById("numRows").value);
    let numColumns = Number(document.getElementById("numColumns").value);

    for (let i = 0; i < numRows; i++)
    {
        rows[i] = table.insertRow(i);
        for (let j = 0; j < numColumns; j++)
        {
            let cell = rows[i].insertCell();
            cell.setAttribute("style", "width: 40px;height: 40px");
            cell.setAttribute("ondrop", "drop(event)");
            cell.setAttribute("ondragover", "allowDrop(event)");
            cell.id = "cell" + i + j;
        }
    }
}

//resets the table 
function resetTable()
{

    for (let i = 0; i < Number(document.getElementById("numRows").value); i++)
    {
        for (let j = 0; j < Number(document.getElementById("numColumns").value); j++)
        {
            let cell = document.getElementById("cell" + i + j);
            cell.setAttribute(
                "style", "background-color:white;width: 40px;height: 40px");
        }
    }
}