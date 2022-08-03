const Engineer = require("../lib/engineer")



test('Test for Role', () => {
   expect(new Engineer("", "", "", "").getRole()).toBe("Engineer");
 });

 
test('Test for Name', () => {
   expect(new Engineer("Rahat Saini", "", "", "").getName()).toBe("Rahat Saini");
 });
