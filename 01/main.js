const list = document.createElement('ul'),
    title = document.createElement('h1'),
    underlineTitle = document.createElement('u');

underlineTitle.innerText = 'Details about the employees';

title.appendChild(underlineTitle);

function Employees(name, companyName, jobPosition, salary) {
    this.name = name;
    this.companyName = companyName;
    this.jobPosition = jobPosition;
    this.salary = salary;

    this.sayEmploye = function() {
        list.innerHTML += `
        <li><b>Name of the employee:</b> ${this.name}, <b>Company Name:</b> ${this.companyName}, <b>Job position:</b> ${this.jobPosition}, <b>Salary:</b>$${this.salary};</li>`
    }
}

const employee = new Employees('John', 'Brainster', 'Employee', 15000),
      director = new Employees('Laura', 'Brainster', 'Director', 80000),
      boss = new Employees('Paula', 'Brainster', 'Boss', 50000);

console.log(employee, director, boss);

employee.sayEmploye();
director.sayEmploye();
boss.sayEmploye();

document.body.append(title, list);