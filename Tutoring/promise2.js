let canDrive = (isDriver, distance) => {
  return new Promise((resolve, reject) => {
    if (!isDriver) {
      reject("You cannot drive");
    } else if (isDriver && distance >= 18) {
      resolve("Can drive, but extra costs apply");
    } else if (isDriver && distance < 18) {
      resolve("Can drive");
    }
  });
};

let driver = false;
let distance = 20;

canDrive(driver, distance)
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
