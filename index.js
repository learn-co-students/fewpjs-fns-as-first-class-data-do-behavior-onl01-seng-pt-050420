/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}



/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let hour = parseInt(timeString.split(':')[0])
  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 12 && hour < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(greeting) {
  node = document.getElementById('greeting')
  node.textContent = greeting
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
