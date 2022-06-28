

function createHeaderTable(nameOfMyTable) {


    let headerTable = document.createElement("thead");
    myTable.appendChild(headerTable);
    headerTable.className += "tableHeader";

    let rowHeaderTable = document.createElement("tr");
    headerTable.appendChild(rowHeaderTable);

    for (let i = 0; i < nameOfMyTable.length; i++) {
        let cellHeaderTable = document.createElement("td");
        rowHeaderTable.appendChild(cellHeaderTable);
        cellHeaderTable.appendChild(document.createTextNode(nameOfMyTable[i]));
        cellHeaderTable.addEventListener("click",() =>{
        })
        let iconHeader = document.createElement("i");
        cellHeaderTable.appendChild(iconHeader)
        iconHeader.className += "fa-solid fa-caret-down";
        cellHeaderTable.style.font = " 1.2em arial,serif";
        cellHeaderTable.style.color = "orange";
        cellHeaderTable.style.fontWeight = "700";
        cellHeaderTable.style.textAlign = "center";   
    }
}

function createBodyTable(employee) {

    let list = employee.toList();

    let rowBodyTable = document.createElement("tr");
    bodyTable.appendChild(rowBodyTable);

    for (let i = 0; i < list.length; i++) {
        let cellBodyTable = document.createElement("td");
        rowBodyTable.appendChild(cellBodyTable);
        cellBodyTable.appendChild(document.createTextNode(list[i]));
        cellBodyTable.style.textAlign = "center";
    }

};
