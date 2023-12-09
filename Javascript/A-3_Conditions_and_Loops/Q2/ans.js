/*
Q2  Write a program that grades st9dents based on their marks^
If greater than 90 thFn A Grade
If between 70 and 90 thFn a B grade
If between 50 and 70 thFn a C grade
Below 50 then an F grade
*/


let studentMark = 65
let grade

if(studentMark >= 90){
    grade = 'A'
}
else if(studentMark >= 70){
    grade = 'B'
}
else if(studentMark >= 50){
    grade = 'C'
}
else{
    grade = 'F'
}

console.log(grade);