// html variable = table.html 
const myTable = document.querySelector("table");
const myArticle = document.querySelector("article");


// TABLE COMMANDS
// parsing array "titles" to the function(aka method) create rows
let titles = ["Lastname", "Firstname", "Contract date", "Occupation", "Yearly salary", "Section", "children"];
createHeaderTable(titles);

// titles.addEventListener('add', () => {
//   console.log('items were added');
// });

// out for creating in order
let bodyTable = document.createElement("tbody");

let createDiv = document.createElement("div");
myArticle.appendChild(createDiv);

let createList = document.createElement("ul");
createDiv.appendChild(createList);

myTable.appendChild(bodyTable); 
createBodyTable(employee1);
createBodyTable(employee2);
createBodyTable(employee3);
createBodyTable(employee4);
createBodyTable(employee5);
createBodyTable(employee6);
createBodyTable(employee7);
createBodyTable(employee8);
createBodyTable(employee9);
createBodyTable(employee10);
createBodyTable(employee11);
createBodyTable(employee12);
