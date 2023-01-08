// Imports Employee object to build off of
const Employee = require('./employee');

// Class - Engineer (builds off of Employee object)
class Engineer extends Employee {
  // Constructs this Engineer object
  constructor(name, id, email, github) {
    // Super class - brings in all the data from the parent(Employee) and uses the data it can(methods)
    super(name, id, email);
    // this(Engineer).github = github
    this.github = github;
  }
  // Custom method that returns Engineer object's github attribute
  getGithub() {
    return this.github;
  }
  // Custom method that returns Engineer object's role attribute
  getRole() {
    return 'Engineer';
  }
};
// Exports Engineer class so that other files can import it
module.exports = Engineer;
