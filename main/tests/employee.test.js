const Employee = require("../lib/Employee");

// Utilizing test-driven development in the employee class.
describe("Test Group A", () => {
  it("creates new instance of employee", () => {
    const emp = new Employee();
    expect(typeof emp).toBe("object");
  });

  it("sets name using the employee constructor", () => {
    const name = "Scott";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
  });

  it("sets ID using the employee constructor", () => {
    const empId = 7;
    const emp = new Employee("Scott", empId);
    expect(emp.id).toBe(empId);
  });

  it("sets email using the employee constructor", () => {
    const empEmail = "email@email.com";
    const emp = new Employee("Scott", 7, empEmail);
    expect(emp.email).toBe(empEmail);
  });
});

describe("Test Group B", () => {
  it("grabs name using the getName method", () => {
    const empName = "Scott";
    const emp = new Employee(empName);
    expect(emp.getName()).toBe(empName);
  });

  it("grabs ID using the getId method", () => {
    const empId = 7;
    const emp = new Employee("Scott", empId);
    expect(emp.getId()).toBe(empId);
  });

  it("grabs email using the getEmail method", () => {
    const empEmail = "email@email.com";
    const emp = new Employee("Scott", 7, empEmail);
    expect(emp.getEmail()).toBe(empEmail);
  });

  it("should return 'Employee'", () => {
    const employeeTag = "Employee";
    const emp = new Employee("Scott", 7, "email@email.com");
    expect(emp.getRole()).toBe(employeeTag);
  });
});
