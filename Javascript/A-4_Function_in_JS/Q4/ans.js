// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the function with various incomes.


function calculateTax(income){
    if(income <= 300000){
        return below3lac(income);
    }
    else if(income <= 600000){
        return below6lac(income);
    }
    else if(income <= 900000){
        return below9lac(income);
    }
    else if(income <= 1200000){
        return below12lac(income);
    }
    else if(income <= 1500000){
        return below15lac(income);
    }
    else{
        return moreThan15lac(income);
    }


    // closures

    function below3lac(income){
        return 0;
    }
    
    // for income between 3 & 6 tax rate is 5%
    function below6lac(income){
        let taxRate = (5/100) * income
        return taxRate
    }

    // for income between 6 & 9 tax rate is 10%
    function below9lac(income){
        let taxRate = (10/100) * income
        return taxRate
    }

    // for income between 9 & 12 tax rate is 15%
    function below12lac(income){
        let taxRate = (15/100) * income
        return taxRate
    }

    // for income between 12 & 15 tax rate is 20%
    function below15lac(income){
        let taxRate = (20/100) * income
        return taxRate
    }

    // for income more than 15lac tax rate is 25%
    function moreThan15lac(income){
        let taxRate = (25/100) * income
        return taxRate
    }
}

console.log('Tax to be paid is: ',calculateTax(300000));