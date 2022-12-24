// Class - Employee
class Employee {
  // Constructs this Employee object
  constructor(name, id, email) {
    // this(Employee).name = name
    this.name = name;
    // this(Employee).id = id
    this.id = id;
    // this(Employee).email = email
    this.email = email;
  }
  // Custom method that returns Employee object's name attribute
  getName() {
    return this.name;
  }
  // Custom method that returns Employee object's id attribute
  getId() {
    return this.id;
  }
  // Custom method that returns Employee object's email attribute
  getEmail() {
    return this.email;
  }
  // Custom method that returns Employee object's role attribute
  getRole() {
    return "Employee";
  }
}
// Exports Employee class so that other files can import it
module.exports = Employee;
