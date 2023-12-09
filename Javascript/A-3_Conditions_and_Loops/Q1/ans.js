// Q1  What are conditional statements? Explain conditional statements with syntax and examples.



//----- Conditional statements are programming constructs that allow the execution of different blocks of code based on whether a specified condition evaluates to true or false. These statements enable the creation of decision-making structures in code, directing the flow based on certain conditions.


// if statement
if(2 == 2){   //if these condition true code will be execute
    console.log("if statement checked");
}


// if else 
if(2 != 2){
    console.log("wrong condition");
}else{
    console.log("else condition will be executed");
}


// if else-if else
let num = 2
if(num % 2 != 0){
    console.log("odd");
}
else if(num % 2 == 0){
    console.log("even"); 
}
else{
    console.log("don't know");
}