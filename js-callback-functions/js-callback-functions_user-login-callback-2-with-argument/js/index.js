console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

function showWelcomeMessage(username) {
  console.log(`Welcome ${username}! You are logged in now.`);
}

handleUserLogin(showWelcomeMessage);
// The exercise starts here!

handleUserLogin(function showWelcomeMessage(username) {
  console.log(`Welcome ${username}! You are logged in now.`);
});
