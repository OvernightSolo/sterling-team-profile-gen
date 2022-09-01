const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// Utilizing test-driven development in the manager class.
it("sets office number from constructor", () => {
  const officeNumber = 311;
  const emp = new Manager("Scott", 7, "email@email.com", officeNumber);
  expect(emp.officeNumber).toBe(officeNumber);
});

it("should return 'Manager' using the getRole method", () => {
  const manager = "Manager";
  const emp = new Manager("Scott", 7, "email@email.com", 7);
  expect(emp.getRole()).toBe(manager);
});

it("grabs office number using the getOffice method", () => {
  const officeNumber = 311;
  const emp = new Manager("Scott", 7, "email@email.com", officeNumber);
  expect(emp.getOfficeNumber()).toBe(officeNumber);
});
