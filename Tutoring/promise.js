let ride = new Promise((resolve, reject) => {
  let driver = false;
  if (driver) {
    resolve("You can ride");
  } else {
    reject("You cannot ride");
  }
});

ride
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
