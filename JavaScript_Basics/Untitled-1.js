// 1. Multiply the Number by 2
function multiplyByTwo(num) {
    let result = num * 2;
    console.log(result);
}

// Example usage
multiplyByTwo(2);
multiplyByTwo(5);
multiplyByTwo(20);

// 2. Student Information
function printStudentInfo(name, age, averageGrade) {
    const formattedGrade = averageGrade.toFixed(2);
    console.log(`Name: ${name}, Age: ${age}, Grade: ${formattedGrade}`);
}

// Example usage
printStudentInfo('John', 15, 5.54678);
printStudentInfo('Steve', 16, 2.1426);
printStudentInfo('Marry', 12, 6.00);

// 3. Excellent Grade
function checkGrade(grade) {
    if (grade >= 5.50) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }
}

// Example usage
checkGrade(5.50);
checkGrade(4.35);

// 4. Month Printer
function printMonth(number) {
    switch (number) {
        case 1: console.log('January'); break;
        case 2: console.log('February'); break;
        case 3: console.log('March'); break;
        case 4: console.log('April'); break;
        case 5: console.log('May'); break;
        case 6: console.log('June'); break;
        case 7: console.log('July'); break;
        case 8: console.log('August'); break;
        case 9: console.log('September'); break;
        case 10: console.log('October'); break;
        case 11: console.log('November'); break;
        case 12: console.log('December'); break;
        default: console.log('Error!'); break;
    }
}

// Example usage
printMonth(2);
printMonth(13);

// 5. Math Operations
function performMathOperation(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
        default: console.log('Invalid operator'); return;
    }
    console.log(result);
}

// Example usage
performMathOperation(5, 6, '+');
performMathOperation(3, 5.5, '*');

// 6. Largest Number
function findLargestNumber(num1, num2, num3) {
    let result = Math.max(num1, num2, num3);
    console.log(`The largest number is ${result}.`);
}

// Example usage
findLargestNumber(5, -3, 16);
findLargestNumber(-3, -5, -22.5);

// 7. Theatre Promotions
function calculateTicketPrice(day, age) {
    let price;
    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) price = 12;
            else if (age > 18 && age <= 64) price = 18;
            else if (age > 64 && age <= 122) price = 12;
            else console.log('Error!');
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) price = 15;
            else if (age > 18 && age <= 64) price = 20;
            else if (age > 64 && age <= 122) price = 15;
            else console.log('Error!');
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) price = 5;
            else if (age > 18 && age <= 64) price = 12;
            else if (age > 64 && age <= 122) price = 10;
            else console.log('Error!');
            break;
        default: console.log('Error!'); return;
    }
    console.log(`${price}$`);
}

// Example usage
calculateTicketPrice('Weekday', 42);
calculateTicketPrice('Holiday', -12);
calculateTicketPrice('Holiday', 15);

// 8. Circle Area
function calculateCircleArea(input) {
    let result;
    if (typeof input === 'number') {
        result = Math.PI * Math.pow(input, 2);
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we received a ${typeof input}.`);
    }
}

// Example usage
calculateCircleArea(5);
calculateCircleArea('name');

// 9. Numbers from 1 to 5
function printNumbersFrom1To5()
