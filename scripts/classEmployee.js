
class Employee {
    constructor(gender, lastname, firstname, contractDate, occupation, yearlySalary, workSection, children) {
        this.gender = gender;
        this.lastname = lastname;
        this.firstname = firstname;
        this.contractDate = contractDate;
        this.occupation = occupation;
        this.yearlySalary = yearlySalary;
        this.workSection = workSection;
        this.children = children;

        this.currentDay = new Date();
        this.bonusDay = new Date("2022-11-30").toLocaleDateString("en-GB");
        this.totalYearInTheCompany = this.currentDay.getFullYear() - this.contractDate.getFullYear();
        this.monthlySalary = this.yearlySalary / 12
        this.annualBonus = (this.yearlySalary / 100) * 5;
        this.seniorityBonus = (this.yearlySalary / 100) * 2;
        this.fullBonus = this.seniorityBonus + this.annualBonus;
    }

    // seniority function
    seniorYear() {
        if (this.totalYearInTheCompany == 0) {
            return ""
        } else {
            return "You have been with us for " + this.totalYearInTheCompany + " years.";
        }
    }

    // bonus for every employee
    yearlyBonus() {
        return "You will receive a total bonus of "
            + this.annualBonus + " €."
    }

    // bonus for senior in the company 
    getSeniorityBonus() {
        if (this.totalYearInTheCompany >= 1) {
            return "You have been with us for " + this.totalYearInTheCompany + " years.\nTherefore you are entitled to "
                + 2 + " % bonus for every year you have been with us. Making it a total of " + 2 * this.totalYearInTheCompany
                + " % this year.\nYou will get a total of " + this.seniorityBonus * this.totalYearInTheCompany + " €.";
        } else {
            return ""
        }
    }
    // date to pay bonus
    bonusPayDate() {
        return "You will receive your bonus on the " + this.bonusDay + ".";
    }

    // total bonus sum
    totalPaycheck() {
        if ((this.currentDay.getFullYear() - this.contractDate.getFullYear()) == 0) {
            return "Your monthly salary with your bonus included: " + (this.monthlySalary + this.annualBonus) + " €.";
        } else {
            return "Your monthly salary with your bonus included: " + Math.floor(Math.abs(this.monthlySalary) + this.fullBonus) + " €.";
        }
    }

    toList(){
        let result = [this.lastname, this.firstname, this.contractDate.toLocaleDateString("en-GB"), this.occupation, this.yearlySalary + ` €`, this.workSection, this.children];
        return result;
      }
};



let employee1 = new Employee("female","Heckel","Amber",new Date("2020-10-11"),"secretary",12000,"HR",2,agency1);
let employee2 = new Employee("male","Legrone","Lionel",new Date("2016-11-01"),"human resources officer",17000,"HR",1);
let employee3 = new Employee("male","Goldtooth","Raven",new Date("2018-03-20"),"programmer front-end",19000,"IT",0); 
let employee4 = new Employee("female","Ridgebear","Sofie",new Date("2012-02-10")," senior programmer front-end",25000,"IT",4);
let employee5 = new Employee("female","Hope","Rowen",new Date("2017-03-12"),"programmer back-end",19000,"IT",2);
let employee6 = new Employee("male","Tesoro","Avery",new Date("2021-02-31"),"programmer back-end",20000,"IT",0);
let employee7 = new Employee("female","Milley","Suzanne",new Date("2012-02-03"),"senior programmer back-end",25000,"IT",2);
let employee8 = new Employee("female","Pasek","Elise",new Date("2020-10-07"),"project manager",25000,"management",2);
let employee9 = new Employee("male","Lafratta","Nur",new Date("2020-10-07"),"marketing agent",18000,"communication",0);
let employee10 = new Employee("female","Fontenot","Elaine",new Date("2022-02-03"),"marketing agent",18000,"communication",3);
let employee11 = new Employee("male","Axton","Amiri",new Date("2021-12-25"),"UI UX designer",19000,"IT",2);
let employee12 = new Employee("male","Ferguson","Noland",new Date("2019-12-01"),"manager",24000,"management",2);

const allEmployees = [employee1,employee2,employee3,employee4,employee5,employee6,employee7,employee8,employee9,employee10,employee11,employee12];
// function string pour récupérer les 5 premiers paramètres de mon constructor

// function does surname firstname gets tickets

// function Employee with one year of seniority = juniorEmployee
// variable senority+1 qsdq
// 