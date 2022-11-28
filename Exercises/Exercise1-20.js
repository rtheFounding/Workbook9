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
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let employee1 = new Employee("Eren", "Yeager", 1, "Founding Titan", 100.5);
let employee2 = new Employee("Cloud", "Strife", 2, "Swordsman", 150.5);
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Employee ${employee2.getFullName()} created`);