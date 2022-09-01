const Intern = require("../lib/Intern");

// Utilizing test-driven development in the intern class.
it("should set school using the constructor", () => {
  const school = "Emerson";
  const emp = new Intern("Scott", 7, "email@email.com", school);
  expect(emp.school).toBe(school);
});

it('should used the getRole method to return "Intern"', () => {
  const intern = "Intern";
  const emp = new Intern("Scott", 7, "email@email.com", "Emerson");
  expect(emp.getRole()).toBe(intern);
});

it("uses getSchool method to get school", () => {
  const school = "Emerson";
  const emp = new Intern("Scott", 7, "email@email.com", school);
  expect(emp.getSchool()).toBe(school);
});
