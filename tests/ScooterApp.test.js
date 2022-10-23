const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here
const scooterapp1 = new ScooterApp();

describe('ScooterApp has correct properties and methods', () => {
  test('has correct stations', () => {
    expect(scooterapp1.stations).toEqual({
      "Manhattan": [],
      "Brooklyn": [],
      "Queens": [],
      "Bronx": [],
      "StatenIsland": [],
    })
  })
})

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
// describe('logIn() method', () => {
//   const user3 = new User("brody0G", "password", 25);

//   scooterapp1.register(user3)
//   scooterapp1.logIn(user3)
//   test('checks if user is in registeredUsers object', () => {
//     expect(user3.logIn).toBe("logged in")
//   })



// add scooter
// describe('addScooter() function', () => {
//   test('sets Scooters station property to location arg', () => {
//     const scooterapp1 = new ScooterApp()
  
//     expect(scooterapp1.addScooter('Bronx', 'felfifofum').toEqual('scooter pushed to station')
//   })
//   })
// })

// remove scooter
