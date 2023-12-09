// Q1  Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.


/*
The ternary operator is a short-hand for the if else statement 
This operator can be written in single line avoiding line spacing for specific condition like 'weather, status, grade, message'
If the condition is true, the value before the colon is assigned; otherwise, the value after the colon is assigned.
*/


let num = 6
num % 2 == 0 ? console.log("even number: ",num) : console.log("odd number: ",num);