/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  const timeArray = timeString.split(':');
  const time = parseInt(timeArray[0] * 100) + parseInt(timeArray[1]);
  if (time <= 1200) {
    return "Good Morning";
  } else if (time > 1200 && time < 1700) {
    return "Good Afternoon";
  } else if (time >= 1700) {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message){
  const greeting = document.getElementById("greeting");
  greeting.innerText = message;
}