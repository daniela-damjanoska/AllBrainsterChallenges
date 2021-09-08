function Employees(name, companyName, jobPosition, salary) {
    this.name = name;
    this.companyName = companyName;
    this.jobPosition = jobPosition;
    this.salary = salary;
}

const employee = new Employees('John', 'Brainster', 'Employee', 15000),
      director = new Employees('Laura', 'Brainster', 'Director', 80000),
      boss = new Employees('Paula', 'Brainster', 'Boss', 50000);

console.log(employee, director, boss);

document.body.innerHTML += `
    <h1><u>Details about the employees</u></h1>
    <ul>
        <li><b>Name of the employee:</b> ${employee.name}, <b>Company Name:</b> ${employee.companyName}, <b>Job position:</b> ${employee.jobPosition}, <b>Salary:</b>$${employee.salary};</li>
        <li><b>Name of the employee:</b> ${director.name}, <b>Company Name:</b> ${director.companyName}, <b>Job position:</b> ${director.jobPosition}, <b>Salary:</b>$${director.salary};</li>
        <li><b>Name of the employee:</b> ${boss.name}, <b>Company Name:</b> ${boss.companyName}, <b>Job position:</b> ${boss.jobPosition}, , <b>Salary:</b>$${boss.salary};</li>
    </ul>`