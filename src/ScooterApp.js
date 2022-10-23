const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  // ScooterApp code here
  static scooterSessions = [];
  static totalScooterSessions = 0;

  constructor() {
    this.stations = {
      "Manhattan": [],
      "Brooklyn": [],
      "Queens": [],
      "Bronx": [],
      "StatenIsland": [],
    };

    this.registeredUsers = {};
    ScooterApp.push(ScooterApp);
    totalScooterSessions++;
  }

  // Instance methods-reg not working

  register(user) {
    if (this.registeredUsers[user.username] !== undefined) {
      console.log(`already registered!`);
      throw `already registered!`;
    } else if (user.age <= 17) {
      console.log(`too young to register!`);
      throw `too young to register!`;
    } else {
      this.registeredUsers[user.username] = {
        "password": user.password,
        "age": user.age,
        "loggedIn": false,
        "accountChange": 0,
      };
    }
  }

  logIn(username, password) {
    if (Object.keys(this.registeredUsers).includes(username)) {
      if (this.registeredUsers[username].password === password) {
        this.registeredUsers["loggedIn"] = true;
        console.log(`logged in`);
        return "logged in";
      }
    }
    console.log(`incorrect`);
  }

  addScooter(location, scooter) {
    if (Object.keys(this.stations).includes(location)) {
      this.stations[location].push(scooter);
      console.log("scooter pushed to station");
    } else {
      console.log("Station doesn't exist");
    }
  }

  removeScooter(scooterToRemove) {
    scooterToRemove = this.serial;
    console.log("Scooter has successfully been removed.");

    if (this.serial === undefined) {
      throw newError("Scooter serial number is not located.");
    }
  }
}

console.log("#####log-in");

module.exports = ScooterApp;
