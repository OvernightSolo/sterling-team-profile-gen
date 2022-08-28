const Engineer = require("../lib/Engineer");

it("set GitHub account through the constructor", () => {
  const empGithub = "GitHubUser";
  const emp = new Engineer("Scott", 1, "email@email.com", empGithub);
  expect(emp.github).toBe(empGithub);
});

it('uses getRole method to return "Engineer"', () => {
  const engineer = "Engineer";
  const emp = new Engineer("Scott", 7, "email@email.com", "GitHubUsername");
  expect(emp.getRole()).toBe(engineer);
});

it("grabs GitHub username using the getGithub method", () => {
  const empGithub = "GitHubUser";
  const e = new Engineer("Scott", 1, "email@email.com", empGithub);
  expect(e.getGithub()).toBe(empGithub);
});
