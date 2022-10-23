class Scooter {
  // scooter code here
  constructor(station, user) {
    // Scooter inctance properties defined by user
    this.station = station;
    this.user = user;

    // Additional scooter instance properties
    this.station = station;
    this.user = user;
    this.serial = Math.floor(Math.random() * 1001);
    this.charge = Math.floor(Math.random() * 101);
    this.isBroken = false;
    this.docked = true;
  }

  // Scooter methods
  rent() {
    if (this.isBroken === false && this.charge > 20) {
      this.docked = false;
      return `Enjoy the ride!`;
    } else if (this.charge <= 20) {
      throw new Error("Scooter low on battery, please charge.");
    } else {
      throw new Error("Scooter is broken, please send a repair request.");
    }
  }

  dock(station) {
    this.station = station;
    if (this.station === undefined) {
      throw new Error("Docking station required!");
    } else {
      this.docked = true;
      // When docked, its now awaiting new user
      this.user = "";
    }
  }

  async recharge() {
    console.log("Starting charge");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;

    console.log("Charge complete");
  }

  async requestRepair() {
    console.log("Starting repair");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.isBroken = false;

    console.log("Repair complete");
  }
}

// scooter1 = new Scooter("Bronx", "felfifofum");
// console.log(scooter1.station);

module.exports = Scooter;
