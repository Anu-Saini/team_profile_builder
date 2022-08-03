class Employee {
  name;
  id;
  email;

  constructor(name, id, email)
  {
    this.email = email;
    this.name = name;
    this.id = id;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return `Employee`;
  }
}

module.exports = Employee;