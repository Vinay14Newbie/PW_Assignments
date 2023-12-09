// Q3  What are loops, and what do we need them? Explain different types of loops with their syntax and examples.


// --- Loops are programming constructs which allow a set of instructions to repeadately execute the code untill the condition get true. They are crucial for repititive works.

// Types of loops 

// for

//   initialization; condition; increament/decrement
for(let i=0; i<10; i++){
    console.log("index is : ", i);
}


// while

let j = 1   //initialization
while(j < 10){   //condition is here
    console.log("index is : ", j);
    j++   //increment / decrement
}


// do-while
// Here, condition is evaluated after the code block is executed.

let i = 1   //initialization
do{
    console.log("index is : ", i);
    i++   // increament
}while(i < 10);   //condition