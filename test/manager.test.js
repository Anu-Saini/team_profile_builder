const Manager = require("../lib/manager")



test('Test for Role', () => {
   expect(new Manager("", "", "", "").getRole()).toBe("Manager");
 });

 
test('Test for Name', () => {
   expect(new Manager("Anuraag", "", "", "").getName()).toBe("Anuraag");
 });

