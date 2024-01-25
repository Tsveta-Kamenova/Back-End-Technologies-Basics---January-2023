function printStudentInfo(name, age, averageGrade) {
    // Format the averageGrade to the second decimal point
    const formattedGrade = averageGrade.toFixed(2);

    // Print the student information
    console.log(`Name: ${name}, Age: ${age}, Grade: ${formattedGrade}`);
}

// Example usage
printStudentInfo('John', 15, 5.54678);
