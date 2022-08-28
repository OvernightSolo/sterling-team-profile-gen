const Employee = require("../lib/Employee");

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
    const testerNum = 7;
    const emp = new Employee("Scott", testerNum);
    expect(emp.id).toBe(testerNum);
  });

  it("sets email using the employee constructor", () => {
    const testerStr = "email@email.com";
    const emp = new Employee("Scott", 7, testerStr);
    expect(emp.email).toBe(testerStr);
  });
});

describe("Test Group B", () => {
  it("grabs name using the getName method", () => {
    const testerStr = "Scott";
    const emp = new Employee(testerStr);
    expect(emp.getName()).toBe(testerStr);
  });

  it("grabs ID using the getId method", () => {
    const testerNum = 7;
    const emp = new Employee("Scott", testerNum);
    expect(emp.getId()).toBe(testerNum);
  });

  it("grabs email using the getEmail method", () => {
    const testerStr = "email@email.com";
    const emp = new Employee("Scott", 7, testerStr);
    expect(emp.getEmail()).toBe(testerStr);
  });

  it("should return 'Employee'", () => {
    const testerStr = "Employee";
    const emp = new Employee("Scott", 7, "email@email.com");
    expect(emp.getRole()).toBe(testerStr);
  });
});
