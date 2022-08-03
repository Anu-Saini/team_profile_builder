const Employee = require("../lib/employee")



test('Test for Role', () => {
   expect(new Employee("", "", "", "").getRole()).toBe("Employee");
 });

 
test('Test for Name', () => {
   expect(new Employee("Heyansh Saini", "", "", "").getName()).toBe("Heyansh Saini");
 });
