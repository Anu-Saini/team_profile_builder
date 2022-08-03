const Intern = require("../lib/intern")



test('Test for Role', () => {
   expect(new Intern("", "", "", "").getRole()).toBe("Intern");
 });

 
test('Test for Name', () => {
   expect(new Intern("Jigisha Saini", "", "", "").getName()).toBe("Jigisha Saini");
 });
