console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

function showWelcomeMessage(username, userRole) {
  console.log(`Welcome ${username}! You are logged in as ${userRole}.`);
}

function showErrorMessage(errorMesssage) {
  console.log(`Error: ${errorMesssage}`);
}

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");
