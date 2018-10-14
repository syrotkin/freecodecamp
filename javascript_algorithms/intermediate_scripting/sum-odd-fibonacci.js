function sumFibs(num) {
    let sum = 0;
    let first = 1;
    let second = 1;
    let next = 0;

    while (first <= num) {
        if (first % 2 === 1) {
            console.log(first);
            sum += first;
        }

        next = first + second;
        first = second;
        second = next;
    }

    if (second <= num && second % 2 === 1) {
        console.log(second);
        sum += second;
    }

    return sum;
}

console.log(sumFibs(4));