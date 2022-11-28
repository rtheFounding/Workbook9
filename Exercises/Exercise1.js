class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }
  //Method
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
let employee2 = new Employee(2, "Ezio", "Auditore", "Protector", 100.5 );

//access a property and print it in a template string
console.log(`Employee ${employee1.firstName} created`);

//
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
console.log(`Employee ${employee2.getFullName()} created`);