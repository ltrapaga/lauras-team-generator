// Imports Employee object to build off of
const Employee = require('./employee');

// Class - Intern (builds off of Employee object)
class Intern extends Employee {
  // Constructs this Intern object
  constructor(name, id, email, school) {
    // Super class - brings in all the data from the parent(Employee) and uses the data it can(methods)
    super(name, id, email);
    // this(Intern).school = school
    this.school = school;
  }
  // Custom method that returns Intern object's school attribute
  getSchool() {
    return this.school;
  }
  // Custom method that returns Intern object's role attribute
  getRole() {
    return 'Intern';
  }
}
// Exports Employee class so that other files can import it
module.exports = Intern;
