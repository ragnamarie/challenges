console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

function showWelcomeMessage(username, userRole) {
  console.log(`Welcome ${username}! You are logged in as ${userRole}.`);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin(function showWelcomeMessage(username, userRole) {
  console.log(`Welcome ${username}! You are logged in as ${userRole}.`);
});
