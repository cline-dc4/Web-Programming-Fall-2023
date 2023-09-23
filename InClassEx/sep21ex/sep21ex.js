//functions needed for drag and drop
function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    alert(data);
    let h3String = document.getElementById(data).innerHTML;
    ev.target.innerHTML = h3String;
}

function createTable()
{
    let tableElement = document.getElementById("dynamicT");
    let rows = [5];
    for (let i = 0; i < 5; i++)
    {
        rows[i] = tableElement.insertRow(i);
        for (let j = 0; j < 3; j++)
        {
            let cell = rows[i].insertCell();
            cell.innerHTML = "" + i + " " + j;
            cell.setAttribute("bgColor", "blue");
        }
    }
}