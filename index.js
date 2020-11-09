/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hoursAndMinutes = time.split(":");
  let hourNum = parseInt(hoursAndMinutes[0])
  if (hourNum < 12) {
    return "Good Morning"
  } else if (hourNum > 12 && hourNum < 17) {
    return "Good Afternoon"
  } else if (hourNum > 17) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(str) {
  let greeting = document.getElementById("greeting");
  greeting.innerText = str
}
