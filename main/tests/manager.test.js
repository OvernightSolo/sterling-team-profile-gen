const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

it("sets office number from constructor", () => {
  const testerNum = 311;
  const emp = new Manager("Scott", 7, "email@email.com", testerNum);
  expect(emp.officeNumber).toBe(testerNum);
});

it("should return 'Manager' using the getRole method", () => {
  const testerStr = "Manager";
  const emp = new Manager("Scott", 7, "email@email.com", 7);
  expect(emp.getRole()).toBe(testerStr);
});

it("grabs office number using the getOffice method", () => {
  const testerNum = 311;
  const emp = new Manager("Scott", 7, "email@email.com", testerNum);
  expect(emp.getOfficeNumber()).toBe(testerNum);
});
