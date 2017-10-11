/* Code for WATS 3020 FizzBuzz Assignment */

//Collect data from user//

let isInteger,
    maxNumber,
    fbResults,
    fbText;

isInteger = false;

while(!isInteger) {
  
  maxNumber = prompt('Enter a number over zero (must be an integer):', 20);
  
  maxNumber = parseInt(maxNumber);
  if (Number.isSafeInteger(maxNumber) && maxNumber > 0){
    isInteger = true;
  }
}

//Render user data//

fbResults =[];

for (let i=1; i <= maxNumber; i++) {
  if (i % 15 == 0) {
  } else if (i % 3 == 0) {
    fbResults.push('Fizz');
  } else if (i % 5 == 0) {
    fbResults.push('Buzz'); 
  } else {
    fbResults.push(i);
  }
}

//Render data to browser//

fbText = '';

for (let result of fbResults) {
  fbText = fbText + result + "\n";
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
