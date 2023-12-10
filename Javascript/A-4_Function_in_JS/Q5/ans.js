// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion. Test the function with different inputs.


function factorial(num){
    if(num == 0 || num == 1) return num;
    return factorial(num-1) * num;
}
console.log(factorial(5));