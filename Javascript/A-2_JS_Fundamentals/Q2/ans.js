// Q2  Describe the usage of the comma operator in JavaScript and provide an example.


// ---- In JavaScript, the comma operator , is used to evaluate multiple expressions and return the result of the last expression. It is often used in situations where multiple expressions need to be executed within a single statement.


// initializing multiple variables at one line
let a = 4, b = 3, c = 2;

// while printing
console.log(a, b, c);

// in the loop
for(let i=0, j=0; i<5 && j<3; i++, j++){
    console.log(i, j);
}
// output
// 0 0
// 1 1
// 2 2