/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
 function greet(timeString) {
  const newTime = parseInt(timeString, 10);
    
  if (newTime < 12) return "Good Morning"
  if (newTime > 17) return "Good Evening"
  return "Good Afternoon"

 }

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}