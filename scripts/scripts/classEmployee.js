
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

        // variable extra
        this.currentDay = new Date();
        this.bonusDay = new Date("2022-11-30").toLocaleDateString("en-GB");
        this.monthlySalary = this.yearlySalary / 12
        this.annualBonus = (this.yearlySalary / 100) * 5;
        this.seniorityBonus = (this.yearlySalary / 100) * 2;
        this.fullBonus = this.seniorityBonus + this.annualBonus;

        this.oneYear = new Date(this.contractDate.getFullYear() + 1, this.contractDate.getMonth(), this.contractDate.getDay()-1);
        this.amountOfYears = this.currentDay.getFullYear() - this.oneYear.getFullYear()
    }

        // EXACT DATE BETWEEN CONTRACT & TODAY
        comparingYear(){
            let result = false;
            if (this.amountOfYears > 0) {
                result = true;
            }
            return result;
        }

        // BONUS IF YOU HAVE MORE THAN 1 YEAR OLD IN THE COMPANY
        bonusPerYearInTheCompany() {
            let result = 0;
        if (this.amountOfYears >= 1) {
            result = this.amountOfYears * this.seniorityBonus;
        }
        return result;
    }

        // BONUS + PAY PER MONTH PER EMPLOYEE
    totalPaycheck() {
        let result = this.monthlySalary;
        if (this.bonusDay == this.currentDay) {          
        if (this.amountOfYears == 0) {
            result =(this.monthlySalary + this.annualBonus);
        } else {
            result = Math.floor(Math.abs(this.monthlySalary) + this.fullBonus);
        }
    }
        return result;
    }
        //  BONUS + PAY PER YEAR PER EMPLOYEE
    totalPayPerYear(){
        if ((this.currentDay.getFullYear() - this.contractDate.getFullYear()) == 0) {
            return (this.yearlySalary + this.annualBonus);
        } else {
            return Math.floor(Math.abs(this.monthlySalary) + this.fullBonus);
        }
    }
        // 
    toList(){
        let result = [this.lastname, this.firstname, this.contractDate.toLocaleDateString("en-GB"), this.occupation, this.yearlySalary + ` €`, this.workSection, this.children];
        return result;
      }

};

// declare new Employees

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

let allEmployees = [employee1,employee2,employee3,employee4,employee5,employee6,employee7,employee8,employee9,employee10,employee11,employee12];

allEmployeesLastname = [employee1.lastname,employee2.lastname,employee3.lastname,employee4.lastname,employee5.lastname,employee6.lastname,employee7.lastname,employee8.lastname,employee9.lastname,employee10.lastname,employee11.lastname,employee12.lastname]
console.log(allEmployeesLastname.sort());
