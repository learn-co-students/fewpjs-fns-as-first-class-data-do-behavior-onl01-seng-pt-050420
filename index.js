/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const timeArray = time.split(":");
  if (parseInt(timeArray[0]) < 12) {
    return "Good Morning";
  } else if (parseInt(timeArray[0]) >= 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const update = document.getElementById('greeting');
  update.innerText = string;
}
