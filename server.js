const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = 3001;

app.use(cors()); // Use cors middleware
app.use(express.json());
// Helper functions
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPalindrome = (num) => {
    const str = num.toString();
    return str === str.split('').reverse().join('');
};

const fibonacci = (n) => {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
};

// Endpoints
app.get('/p', (req, res) => {
    const { start, end } = req.query;
    const primes = [];
    for (let i = parseInt(start); i <= parseInt(end); i++) {
        if (isPrime(i)) primes.push(i);
    }
    res.json(primes);
});

app.get('/e', (req, res) => {
    const { start, end } = req.query;
    const evens = [];
    for (let i = parseInt(start); i <= parseInt(end); i++) {
        if (i % 2 === 0) evens.push(i);
    }
    res.json(evens);
});

app.get('/f', (req, res) => {
    const { n } = req.query;
    res.json(fibonacci(parseInt(n)));
});

app.get('/pa', (req, res) => {
    const { start, end } = req.query;
    const palindromes = [];
    for (let i = parseInt(start); i <= parseInt(end); i++) {
        if (isPalindrome(i)) palindromes.push(i);
    }
    res.json(palindromes);
});

app.get('/o', (req, res) => {
    const { start, end } = req.query;
    const odds = [];
    for (let i = parseInt(start); i <= parseInt(end); i++) {
        if (i % 2 !== 0) odds.push(i);
    }
    res.json(odds);
});

app.get('/s', (req, res) => {
    const { numbers } = req.query;
    const numArray = numbers.split(',').map(Number);
    const sum = numArray.reduce((acc, val) => acc + val, 0);
    res.json({ sum });
});

app.get('/a', (req, res) => {
    const { numbers } = req.query;
    const numArray = numbers.split(',').map(Number);
    const avg = numArray.reduce((acc, val) => acc + val, 0) / numArray.length;
    res.json({ avg });
});

app.get('/sq', (req, res) => {
    const { numbers } = req.query;
    const numArray = numbers.split(',').map(Number);
    const squares = numArray.map(num => num * num);
    res.json(squares);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
