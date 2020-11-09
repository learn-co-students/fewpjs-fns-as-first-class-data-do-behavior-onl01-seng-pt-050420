/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeStr) {
    let greetTime = timeStr.split(':');
    let greetHour = parseInt(greetTime[0]);

    if (greetHour < 12){
      return "Good Morning";

    }
     else if (greetHour < 17) {
        return "Good Afternoon";
      } 
       return "Good Evening";
         
}

function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
