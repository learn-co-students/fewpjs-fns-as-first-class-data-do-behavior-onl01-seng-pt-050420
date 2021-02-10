/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(str){

  if (str.length === 4){
    str = '0'+ str;
  }
  if (str < "12:00"){
    return 'Good Morning'
  } else if (str > '17:00'){
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(str){
  // console.log(str)
  let greeter = document.querySelector("#greeting").textContent = str
  console.log(greeter)
}
 1  node_modules/.bin/_mocha 
