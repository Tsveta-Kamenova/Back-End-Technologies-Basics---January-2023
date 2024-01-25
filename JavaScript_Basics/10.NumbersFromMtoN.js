function printNumbersFromMToN(M, N) {
    // Check if M is greater than or equal to N
    if (M >= N) {
        // Use a for loop to iterate from M down to N (inclusive)
        for (let i = M; i >= N; i--) {
            // Print the current value of 'i'
            console.log(i);
        }
    } else {
        console.log('Error: M should be greater than or equal to N.');
    }
}
