const isPrime = num => {
    for(let i=2;i <= Math.sqrt(num);i++){
        if(num % i === 0) return false;
    
    }
    return num>1;
};
const getPrimeNumbers = arr => arr.filter(num => isPrime(num));
const numbers = [2,3,5,6,7,8,11,13,17,19,23,29];
const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers);
