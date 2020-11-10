/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

/* Write your implementation of greet() */
function greet(timeStr) {
  /* It would be a good idea to make sure hour isn't less than 0 or greater
   * than 24...perhaps "throwing an Error" if one of these impossible cases
   * happens.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Throwing_a_generic_error
   *
   */
  const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}
















// function greet(e){
//   if (e.parseInt() >= 0000 && e.parseInt() < 1200){
//     return "Good Morning"
//   }
//   if (e.parseInt() >= 1200 && e.parseInt() < 1700) {
//     return "Good Afternoon"
//   }
//   if (e.parseInt() >= 1700 && e.parseInt() <= 2359) {
//     return "Good Evening"
//   }
//   else
//   return "NOT A VALID TIME!"
// }
  
// /* Write your implementation of displayMessage() */
// displayMessage(e){
//   body = document.querySelector("body");
//   header = body.createElement("h1");
//   header.innerHTML = e;


// }
