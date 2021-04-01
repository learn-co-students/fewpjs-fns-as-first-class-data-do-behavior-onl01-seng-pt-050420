/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString){

  let spltTime = timeString.split(":");
  let convTime = spltTime[0].concat(spltTime[1]);
  let prsTime = parseInt(convTime, 10);

  if (prsTime <1200){
    return 'Good Morning';
  }
  else if ((prsTime >=1200) && (prsTime <= 1700)){
    return 'Good Afternoon';
  }
  else if (prsTime > 1700){
    return 'Good Evening';
  }
  else {
    return 'TEST';
  }
};

function displayMessage(input){

  const greeting = document.getElementById("greeting");
  greeting.innerText = input;
};