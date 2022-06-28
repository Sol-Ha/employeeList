// html variable = table.html 
const myTable = document.querySelector("table");
const myArticle = document.querySelector("#employee_calculation");
let bodyTable = document.createElement("tbody");
let cellsHeader = document.querySelectorAll("td");
let createDiv = document.createElement("div");
let createList = document.createElement("ul");
let clickBtn = document.querySelectorAll("fa-solid fa-caret-down")
let sorBtn = document.querySelector("#btnPress")
let titles = ["Lastname ", "Firstname ", "Contract date ", "Occupation ", "Yearly salary ", "Section ", "children "];

// TABLE COMMANDS

createHeaderTable(titles);

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

// table extras

// TOTAL EMPLOYEES
let employeeDatas1 = document.createElement("p");
employeeDatas1.className += "myArticle_p1";
myArticle.appendChild(employeeDatas1);
let sumEmployee = document.createTextNode("Total Employee : "+ allEmployees.length);
employeeDatas1.appendChild(sumEmployee)

// TOTAL 

let employeeDatas2 = document.createElement("p");
employeeDatas1.className += "myArticle_p2";
myArticle.appendChild(employeeDatas2);
let sumCompanyHasToPay = document.createTextNode("Total cost for all employees : ");
employeeDatas2.appendChild(sumCompanyHasToPay)


// parsing 
function annualPayWorkforce(employees) {
    // starts from zero and will go on for each employees
let sum = 0;

employees.forEach(employee => {
    sum += employee.totalPayPerYear()
});
return sum
}

console.log(annualPayWorkforce(allEmployees));



console.log(employee2.amountOfYears);
console.log(employee10.annualBonus);
console.log(employee2.bonusPerYearInTheCompany());
console.log(employee10.totalPaycheck());
// console.log(employee10.totalPayPerYear());

// allEmployees.forEach(employee => {
//     console.log(employee.totalPayPerYear());
// });