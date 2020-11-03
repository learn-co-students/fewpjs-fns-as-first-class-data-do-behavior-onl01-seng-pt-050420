/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time)
{
  let x = time.split(":");
  let y = x[0].concat(x[1])
  let timeInt = parseInt(y, 10);

  if (timeInt > 1700)
  {
    return "Good Evening";
  }
  else if (timeInt > 1200)
  {
    return "Good Afternoon";
  }
  else 
  {
    return "Good Morning";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message)
{
  let greeting = document.getElementById("greeting");
  greeting.innerHTML = message;
}