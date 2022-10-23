const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  test("is an object", () => {
    const scooter1 = new Scooter("Bronx", "felfifofum");
    // edit this to be a real test!
    expect(typeof scooter1).toEqual("object");
  });
});

describe("test scooter instance properties", () => {
  const user = new User();
  const scooter = new Scooter("Manhatten", user);

  test("user instance property", () => {
    expect(scooter.user).toEqual(user);
  });

  test('test serial is not NaN', () => {
    expect(typeof (scooter.serial)).toBe('number')
  });

  test('test charge instance property is not NaN', () => {
    expect(typeof (scooter.charge)).toBe('number')
  });

  test('test of isBroken isntance prop is falsy', () => {
    expect(scooter.isBroken).toBeFalsy()
  });
});

//Method tests
describe("scooter methods", () => {
  // tests here!

  //rent method
  test("rent() logs 'enjoy the ride'", () => {
    const scooter2 = new Scooter("Bronx", "felfifofum");
    expect(scooter2.rent()).toEqual("Enjoy the ride!");
  });

  //dock method
  test("dock() logs true", () => {
    const scooter3 = new Scooter("Bronx", "felfifofum");
    expect(scooter3.docked).toBeTruthy();
  });

  //requestRepair method
  describe("Tests the requestRepair() function", () => {
    test("repairs", async () => {
      const scooter = new Scooter();
      await scooter.requestRepair();
      expect(scooter.isBroken).toBeFalsy();
    });
  });

  //charge method
  describe("Tests the recharge() function", () => {
    test("charges", async () => {
      const scooter = new Scooter();
      await scooter.recharge(); // we need to wait for the charge!
      expect(scooter.charge).toBe(100);
    });
  });
});
