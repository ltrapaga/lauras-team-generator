// Imports Employee object to build off of
const Employee = require("./employee");

// Class - Manager (builds off of Employee object)
class Manager extends Employee {
  // Constructs this Manager object
  constructor(name, id, email, officeNumber) {
    // Super class - brings in all the data from the parent(Employee) and uses the data it can(methods)
    super(name, id, email);
    // this(Manager).officeNumber = officeNumber
    this.officeNumber = officeNumber;
  }
  // Custom method that returns Manager object's officeNumber attribute
  getOfficeNumber() {
    return this.officeNumber;
  }
  // Custom method that returns Manager object's role attribute
  getRole() {
    return "Manager";
  }
};
// Exports Manager class so that other files can import it
module.exports = Manager;
