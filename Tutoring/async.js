let canDrive = (isDriver, distance) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isDriver) {
        reject("You cannot drive");
      } else if (isDriver && distance >= 18) {
        resolve("Can drive, but extra costs apply");
      } else if (isDriver && distance < 18) {
        resolve("Can drive");
      }
    }, 2000);
  });
};

function main1() {
  let driver = true;
  let distance = 20;
  canDrive(driver, distance)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("This came before the message");
}

let main2 = async () => {
  let driver = false;
  let distance = 20;
  try {
    let message = await canDrive(driver, distance);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
  console.log("This came before the message");
};

main2();
