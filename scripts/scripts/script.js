// HTML
// html variable = index.html 

let agencyName = document.querySelector("#article_header_title");
let address1 = document.querySelector("#article_header_street");
let address2 = document.querySelector("#article_header_city");
let logoCompany = document.querySelector("#article_header_img");
let employeeTotal = document.querySelector("#article_h2");
let cardEmployee = document.querySelector("#article_aside_cardEmployees");

// HTML COPY TO
// connecting variable to html cards
agencyName.textContent = agency1.companyName;
address1.textContent = agency1.street;
address2.textContent = agency1.poBox + " " + agency1.city;
logoCompany.src = "./assets/images/images_logo/company_logo1.svg";
employeeTotal.textContent ="TOTAL EMPLOYEES: " + "(" + allEmployees.length + ")";

let randomPortraitWomen = ["./assets/images/images_icons_employees/woman1.jpg", "./assets/images/images_icons_employees/woman2.jpg", "./assets/images/images_icons_employees/woman3.jpg"];
let randomPortraitMen = ["./assets/images/images_icons_employees/man1.jpg", "./assets/images/images_icons_employees/man2.jpg", "./assets/images/images_icons_employees/man3.jpg"];

allEmployees.forEach((Employee) => {
  // card owner
  let createCard = document.createElement("div");
  createCard.className += "article_aside_cardEmployee_div";
  cardEmployee.appendChild(createCard);

  let cardName = document.createElement("h4");
  createCard.appendChild(cardName);
  let employeeName = document.createTextNode(Employee.firstname + " " + Employee.lastname);
  cardName.appendChild(employeeName);

  let employeePic = document.createElement("img");
  employeePic.className += "cardEmployee_img";
  if (Employee.gender === "female") {
    let randomNum = Math.floor(Math.random() * randomPortraitWomen.length);
    employeePic.src = randomPortraitWomen[randomNum]
  }else{
    let randomNum = Math.floor(Math.random() * randomPortraitMen.length);
    employeePic.src = randomPortraitMen[randomNum]
  }
  createCard.appendChild(employeePic);
  // card list
  let cardList = document.createElement("ul");

  createCard.appendChild(cardList);

    let cardListElement1 = document.createElement("li");
    cardList.appendChild(cardListElement1);
    let employeeContract = document.createTextNode("Contract Date : " + Employee.contractDate.toLocaleDateString("en-GB"));
    cardListElement1.appendChild(employeeContract);

    let cardListElement2 = document.createElement("li");
    cardList.appendChild(cardListElement2);
    let employeeSalary = document.createTextNode("Yearly salary : " + Employee.yearlySalary + " €");
    cardListElement2.appendChild(employeeSalary);

    let cardListElement3 = document.createElement("li");
    cardList.appendChild(cardListElement3);
    let employeeJob = document.createTextNode("Job : " + Employee.occupation);
    cardListElement3.appendChild(employeeJob);

    let cardListElement4 = document.createElement("li");
    cardList.appendChild(cardListElement4);
    let employeeSection = document.createTextNode("Division : " + Employee.workSection);
    cardListElement4.appendChild(employeeSection);

    let cardListElement5 = document.createElement("li");
    cardList.appendChild(cardListElement5);
    let employeeChildren = document.createTextNode("Children : " + Employee.children);
    cardListElement5.appendChild(employeeChildren)

    let cardListElement6 = document.createElement("li");
    cardList.appendChild(cardListElement6);
    let employeeMeal = document.createTextNode("Provided with : " + agency1.meals());
    cardListElement6.appendChild(employeeMeal);
});

