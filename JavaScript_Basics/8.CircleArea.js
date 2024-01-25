function calculateCircleArea(input) {
    let result;
    if (typeof input === 'number') {
        result = Math.PI * Math.pow(input, 2);
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we received a ${typeof input}.`);
    }
}