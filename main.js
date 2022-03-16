// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
// console.log(new Date)

// const displayDate = () => {
//   const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;

// Write a JavaScript program to convert a number to a string.

var num = 24;
var str = num.toString();

console.log(num); // 24
console.log(str); // "24"

// Write a JavaScript program to convert a string to the number.

myString = '129' 
console.log(parseInt(myString)) // expected result: 129

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  let dataType = function(thing1){
      let answer = typeof(thing1);

      console.log("The type of ", thing1, " is ", answer)
  }
dataType("Joey");
dataType(3-1);
dataType("3-1");
dataType(false);
dataType(null);
dataType(undefined);
dataType(question3);
  
// Write a JavaScript program that adds 2 numbers together.

function add(){
    const num1 = 5;
    const num2 = 3;

// add two numbers
const sum = num1 + num2;

    // display the sum
    console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
}
// call function
add();

// Write a JavaScript program that runs only when 2 things are true.

let number1 = 20 != 10
let number2 = 2 < 1
if (number1 && number2 === 100)
{ 
  console.log ("I learned something")
}
// Write a JavaScript program that runs when 1 of 2 things are true.

if (number1 || number2 === 100){
  console.log ("I get a 100")
}
else { return false

}

// Write a JavaScript program that runs when both things are not true.  

if (number1 && number2 !== 50) {
  console.log ("Go fish")
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24