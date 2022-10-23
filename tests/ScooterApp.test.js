const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here
const scooterapp1 = new ScooterApp();

describe("ScooterApp has correct properties and methods", () => {
  test("has correct stations", () => {
    expect(scooterapp1.stations).toEqual({
      "Manhattan": [],
      "Brooklyn": [],
      "Queens": [],
      "Bronx": [],
      "StatenIsland": [],
    });
  });
});

// register user
describe("register() method", () => {
  const user1 = new User("felfifofum", "password", 22);
  scooterapp1.register(user1);
  const user2 = new User("wendy1", "password", 11);

  test("user already registered", () => {
    const regErr = () => {
      scooterapp1.register(user1);
      scooterapp1.register(user1);
    };
    expect(regErr).toThrow(`already registered!`);
  });

  test("user too young", () => {
    const ageErr = () => {
      scooterapp1.register(user2);
    };
    expect(ageErr).toThrow(`too young to register!`);
  });
});

// log in
describe("The 'logIn(username, password)' instance method", () => {
  scooterapp2 = new ScooterApp();

  const user5 = new User("adamadam", "maths", 45);

  scooterapp2.register(user5);

  test("Logs correct message if user has account in 'registeredUsers' object", () => {
    expect(scooterapp2.logIn("adamadam", "maths")).toEqual(
      `User has successfully logged in.`
    );
  });

  test("if that user exists, sets 'loggedIn' property to true", () => {
    scooterapp2.logIn(user5.username, user5.password);
    expect(scooterapp2.registeredUsers[user5.username].loggedIn).toBe(true);
  });

  test("throws an error if the user not in 'registeredUsers' object.", () => {
    const userNotRegErr = () => {
      scooterapp2.logIn("scam", "scamPW");
    };
    expect(userNotRegErr).toThrow(`Username or password is incorrect`);
  });
});

describe("The 'addScooter(location,scooter)' instance method", () => {
  test("Sets scooter's station property to location arg", () => {
    expect(
      Object.keys(scooterapp1.stations).includes("Manhattan")
    ).toBeTruthy();
  });

  test("adds scooter argument to the station", () => {
    expect(scooterapp1.addScooter("Bronx", "felfifofum")).toEqual(
      `Added to station.`
    );
  });

  test("throws error if no entries to location and scooter args", () => {
    noEntryErr = () => {
      scooterapp1.addScooter("", "");
    };
    expect(noEntryErr).toThrow(`You haven't entered a location or scooter.`);
  });

  test("throws error if station doesn't exist", () => {
    stationNoExistErr = () => {
      scooterapp1.addScooter("norrealstation", "felfifofum");
    };
    expect(stationNoExistErr).toThrow("Station doesn't exist.");
  });
});

// remove scooter-not working in ScooterApp.js-onced fixed, all files should show in coverage
describe("The 'removeScooter(scooterToRemove)' instance method", () => {
  expect(
    scooterapp1
      .removeScooter("Bronx", "felfifofum")
      .toEqual(`Scooter has successfully been removed.`)
  );
});
