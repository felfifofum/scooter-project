const User = require("../src/User");

// User tests here
describe("User class", () => {
  // test username
  const user1 = new User("felfifofum", "password", 18);
  test("has a username", () => {
    expect(user1.username).toBe("felfifofum");
  });

  // test password
  test("has a password", () => {
    expect(user1.password).toBe("password");
  });

  // test age
  test("has an age", () => {
    expect(user1.age).toBe(18);
  });

  test("age is non NaN", () => {
    expect(typeof user1.age).toBe("number");
  });
  
});
