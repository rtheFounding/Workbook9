class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let randy = new Person("Randy", "Rivera");
console.log(randy.getFullName());

class Employee extends Person {
  constructor(firstName, lastName, id, jobTitle, payRate) {
    super(firstName, lastName);

    this.id = id;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getGrossPay(hoursWorked) {
    return (hoursWorked * this.payRate).toFixed(2);
  }
}

let employee1 = new Employee("Eren", "Yeager", 1, "Founding Titan", 100.5);
let employee2 = new Employee("Cloud", "Strife", 2, "Swordsman", 150.5);
let employee3 = new Employee("Tyler", "Joseph", 3, "Singer", 500.5);
let employee4 = new Employee("Josh", "Dun", 4, "Drummer", 500.5);
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Employee ${employee2.getFullName()} created`);
console.log(`Hi! My name is ${employee3.getFullName()} and I get paid ${employee3.getGrossPay(3)}`)
console.log(`Hi! My name is ${employee4.getFullName()} and I get paid ${employee4.getGrossPay(3)}`)