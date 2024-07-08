function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimes() {
    const input = document.getElementById('numberInput').value;
    const limit = parseInt(input);
    if (isNaN(limit) || limit < 1) {
        document.getElementById('result').innerText = 'Please enter a valid number greater than 0.';
        return;
    }

    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    document.getElementById('result').innerText = `Prime numbers up to ${limit}: ${primes.join(', ')}`;
}
