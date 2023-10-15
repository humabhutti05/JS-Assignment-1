// Practice exercise 1.3 
// console.log("Hello world")

// Practice exercise 1.4 

// let a = 10;
// console.log("The value of 'a' is:", a)

  /*This JavaScript file is a basic example that demonstrates
        variable declaration and logging to the console. It sets
        a variable 'a' to the value 10 and logs its value.*/
        
        // Chapter project

        
        // This is a multi-line comment.
// You can add your name and description here.
// console.log("Your Name"); // Commented out to prevent console output
// chapter-1 
// practice excercise 2.1
// question-1

// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;

// console.log(typeof str1)
// console.log(typeof str2)
// console.log(typeof val1)
// console.log(typeof val2)
// console.log(typeof myNum)

// question-4
// Numeric Addition:
// let nr1 = 12;
// let nr2 = 14;
// let result1 = nr1 + nr2; // Result: 26
// console.log(result1)
// // String Concatenation:
// let str1 = "Hello ";
// let str2 = "addition";
// let result2 = str1 + str2; // Result: "Hello addition"
// console.log(result2)

// practice excercise 2.2
// question-1
// const Name = "Huma"; // Replace "YourName" with your actual name
// const Age = 19; // Replace 25 with your actual age
// const canCodeJavaScript = true; // Set to true if you can code JavaScript, or false if you cannot
// console.log(`My name is ${Name}, I am ${Age} years old, and I can code JavaScript: ${canCodeJavaScript}.`);


// question-2 
// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3;
// console.log(result1, result2);

// question-3 
// let nr1 = 15;
// let nr2 = 10;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 * nr2;
// let result2 = str1 * nr3;
// console.log(result1, result2);

// question-4
// let nr1 = 30;
// let nr2 = 5;
// let result1 = nr1 / nr2;
// console.log(result1);

// question-5
// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;
// console.log(result1);


// modules

// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);


// let nr3 = 8;
// let nr4 = 2;
// let result2 = nr3 % nr4;
// console.log(`${nr3} % ${nr4} = ${result2}`);


// let nr5 = 15;
// let nr6 = 4;
// let result3 = nr5 % nr6;
// console.log(`${nr5} % ${nr6} = ${result3}`);


// Unary operators: increment and decrement

// let nr1 = 4;
// nr1++;
// console.log(nr1);


// let nr2 = 4;
// nr2--;
// console.log(nr2);


// Prefix and postfix operators

// postfix operators
// let nr = 2;
// console.log(nr++);
// console.log(nr);

// prefix operators
// let nr = 2;
// console.log(++nr);


// let nr1 = 4;
// let nr2 = 5;
// let nr3 = 2;
// console.log(nr1++ + ++nr2 * nr3++);

// Practice exercise 2.3

// we declare a variable x, and set it to 2 as an initial value:
// let x = 2;
// x += 2;
// After this assignment operation, the value of x becomes 4, because x += 2 is the same
// as x = x + 2:
// In the next assignment operation, we will subtract 2:
// x -= 2;
// So, after this operation the value of x becomes 2 again (x = x – 2). In the next
// operation, we are going to multiply the value by 6:
// x *= 6;
// When this line has been executed, the value of x is no longer 2, but becomes
// 12 (x = x * 6). In the next line, we are going to use an assignment operator to perform
// a division:
// x /= 3;
// After dividing x by 3, the new value becomes 4. The next assignment operator we
// will use is exponentiation:
// x **= 2;
// The value of x becomes 16, because the old value was 4, and 4 to the power of 2
// equals 16 (4 * 4). The last assignment operator we will talk about is the modulus
// assignment operator:
// x %= 3;
// After this assignment operation, the value of x is 1, because 3 can fit 5 times into 16
// and then leaves 1.

// let x = 2; // Initialize x to 2

// x += 2; // Increment x by 2 (x is now 4)
// x -= 2; // Decrement x by 2 (x is now 2)
// x *= 6; // Multiply x by 6 (x is now 12)
// x /= 3; // Divide x by 3 (x is now 4)
// x **= 2; // Square x (x is now 16)
// x %= 3; // Calculate the remainder when x is divided by 3 (x is now 1)

// console.log(x); // Output the final value of x (1)

// Practice exercise 2.4 
// question 1 
// Create variables for three numbers: a, b, and c. Update these variables with the
// following actions using the assignment operators:
// • Add b to a
// • Divide a by c
// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console

// let a = 10;
// let b = 5;
// let c = 2;

// b += a; 
// a /= c; 
// c %= b; 

// console.log("a:", a); 
// console.log("b:", b); 
// console.log("c:", c);

// Comparison operators
// Equal

// let x = 5;
// let y = "5";
// console.log(x == y); //true
// console.log(x === y);  //false

// Not equal

// let x = 5;
// let y = "5";
// console.log(x != y); //  false
// console.log(x !== y);  // true


// Greater than and smaller than

// let x = 5;
// let y = 6;
// console.log(y > x); //  its true y is greater than x
// console.log(x > y);  //  its false x is not greater than y
// console.log(y > y); // y is not greater than y, so this one will log false.
// console.log(y >= y); // true, because its equal 
// console.log(y < x); // false. because y is smaller than x
// console.log(x < y); //true, because x is smaller than y.
// console.log(y < y); // false, because y is not smaller than y, so this one will log .
// console.log(y <= y); // true, whether y is smaller than or equal to y. It is equal to y

// Logical operators
// And

// let x = 1;
// let y = 2;
// let z = 3;
// console.log(x < y && y < z); // true, 
// console.log(x > y && y < z);  //false

// // Or

// console.log(x > y || y < z); // true
// console.log(x > y || y > z);  // false



// Not

// let x = false;
// console.log(!x); // true
// let x = 1;
// let y = 2;
// console.log(!(x < y)); // x is smaller than y, so the expression evaluates to true. But, it gets negated due to the
// exclamation mark and prints false to the console.

// chapter project 

// Miles-to-kilometers converter
// Create a variable that contains a value in miles, convert it to kilometers, and log the
// value in kilometers in the following format

var miles = 10;
var kilometers = miles * 1.60934;

console.log(miles + " miles is equal to " + kilometers + " kilometers");


// BMI calculator

// Set values for height in inches and weight in pounds, then convert the values to centimeters and kilos, outputting the results to the console:
// 1 inch is equal to 2.54 cm
// 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) divided by squared height (in meters). Output 
// the results to the console.

var heightInInches = 70;
var weightInPounds = 160; 

var inchesToCentimeters = 2.54;
var poundsToKilos = 0.453592;

var heightInCentimeters = heightInInches * inchesToCentimeters;
var weightInKilos = weightInPounds * poundsToKilos;

var heightInMeters = heightInCentimeters / 100;
var bmi = weightInKilos / (heightInMeters * heightInMeters);

console.log("Height in centimeters: " + heightInCentimeters + " cm");
console.log("Weight in kilograms: " + weightInKilos + " kg");
console.log("BMI: " + bmi);




// Self-check quiz
// 1. What data type is the following variable?
// const c = "5";
 
// let a = "Hello";
// a = "world";
// console.log(a + " " + "Answer: The console will output" + " " + "world.");


// 2. What data type is the following variable?
// const c = 91;
// const c = 91;
// console.log("NO the data type" +" "+ c + " " + "is a number" )

// 3. Which one is generally better, line 1 or line 2?
// let empty1 = undefined; //line 1
// let empty2 = null; //line 2

// let empty1 = undefined; //line 1
// let empty2 = null; //line 2
// console.log(empty1 , empty2)
// Answer: It's generally better to use null (line 2) when you want to represent the absence of a value in JavaScript. 
// undefined is often used to indicate uninitialized variables, while null is a deliberate assignment to indicate the absence of a value.



// 4. What is the console output for the following?
// let a = "Hello";
// a = "world";
// console.log(a);
// let a = "Hello";
// a = "world";
// console.log(a);
// Answer: The console will output "world."



// 5. What will be logged to the console?
// let a = "world";
// let b = `Hello ${a}!`;
// console.log(b);
// let a = "world";
// let b = `Hello ${a}!`;
// console.log(b);
// Answer: The console will log "Hello world!"


// 6. What is the value of a?
// let a = "Hello";
// a = prompt("world");
// console.log(a);
// let a = "Hello";
// a = prompt("world");
// console.log(a);
// Answer: The value of a will be whatever the user enters in the prompt. It will be a string.

// 7. What is the value of b output to the console?
//  let a = 5;
//  let b = 70;
//  let c = "5";
//  b++;
//  console.log(b);
// let a = 5;
// let b = 70;
// let c = "5";
// b++;
// console.log(b);
// // The value of b will be 71, and that's what will be logged to the console.




// 8. What is the value of result?
//  let result = 3 + 4 * 2 / 8;

// let result = 3 + 4 * 2 / 8;
// console.log(result)

//  9. What is the value of total and total2?
//  let firstNum = 5;
//  let secondNum = 10;
//  firstNum++;
//  secondNum--;
//  let total = ++firstNum + secondNum;
//  console.log(total);
//  let total2 = 500 + 100 / 5 + total--;
//  console.log(total2);


//  10. What is logged to the console here?
//  const a = 5;
//  const b = 10;
//  console.log(a > 0 && b > 0);
//  console.log(a == 5 && b == 4);
//  console.log(true ||false);
//  console.log(a == 3 || b == 10);
//  console.log(a == 3 || b == 7);

// const a = 5;
// const b = 10;
// console.log(a > 0 && b > 0); // true
// console.log(a == 5 && b == 4); // false
// console.log(true || false); // true
// console.log(a == 3 || b == 10); // true
// console.log(a == 3 || b == 7); // false
