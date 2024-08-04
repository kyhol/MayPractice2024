function processUserInput(userName, callback) {
  console.log("Processing user: " + userName);
  // Simulate a time-consuming operation
  setTimeout(function () {
    // Simulate an error
    if (userName.length < 3) {
      callback(new Error("Username must be at least 3 characters long"), null);
    } else {
      callback(null, userName);
    }
  }, 2000);
}

function greetUser(error, userName) {
  if (error) {
    console.log("Error: " + error.message);
  } else {
    console.log("Hello, " + userName);
  }
}

function sayGoodbye(error, userName) {
  if (error) {
    console.log("Error: " + error.message);
  } else {
    console.log("Goodbye, " + userName);
  }
}

processUserInput("Jo", greetUser);
processUserInput("John", (userName) => {
  console.log("hello, " + userName);
});
