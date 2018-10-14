/**
 *  Sum all the prime numbers up to and including the provided number.
 */
function sumPrimes(num) {
    if (num === 1) {
        return 0;
    }

    let primes = [2];
    for (let i = 3; i <= num; i++) {
        if (isPrime(i, primes)) {
            primes.push(i);
        }
    }
    console.log(primes);
    return primes.reduce((previousValue, currentValue, currentIndex, array) => {
        return previousValue + currentValue;
    });
}

function isPrime(num, array) {
    for (let i = 0; i < array.length; i++) {
        if (num % array[i] === 0) {
            return false;
        }
    }
    return true;
}


console.log(sumPrimes(977));
