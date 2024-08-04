let drive1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Driver1 can drive");
  }, 3000);
});

let drive2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Driver2 can drive");
  }, 2000);
});

let drive3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Driver3 can drive");
  }, 1000);
});

Promise.all([drive1, drive2, drive3]).then((messages) => {
  console.log(messages);
});

Promise.race([drive1, drive2, drive3]).then((message) => {
  console.log(message);
});
