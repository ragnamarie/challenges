console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let currentTime = new Date().getHours();
  if (6 <= currentTime && currentTime <= 12) {
    return "Good Morning";
  } else if (13 <= currentTime && currentTime <= 18) {
    return "Good Afternoon";
  } else if (19 <= currentTime && currentTime <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  let currentDay = new Date().getDay();
  //monday
  if (currentDay == 1) {
    return "darkgrey";
    //tuesday to friday
  } else if (2 <= currentDay && currentDay <= 5) {
    return "lightblue";
    //saturday to sunday
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
