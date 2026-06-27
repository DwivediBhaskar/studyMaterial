// 1. print all N prime number ie from 0 to given number
// method 1- Trial Division" method.
// time complecity -$O(n\sqrt{n})$.

function fIsPrime(num){
if(num < 2) return false;

for(let i=2;i <=Math.sqrt(num);i++){
    if(num % i === 0) return false;
}
return true;
}


function PrimeNumber(num){
  let prime = [];

  for(let i =2; i <=num;i++){
    if (IsPrime(i)){
      prime.push(i)
    }
  }

  return prime;
}

console.log(PrimeNumber(7));


//2 find the count of prime number between 1 to n

function PrimeNumber(num){
  let prime = [];

  for(let i =2; i <=num;i++){
    if (IsPrime(i)){
      prime.push(i)
    }
  }

  return prime.length
}

console.log(PrimeNumber(7));


//3 Find  Nth PrimeNumbers (divisble by: 1 and themselves only e.g. 2,3,5,7,11)


function fIsPrime(num){
if(num < 2) return false;

for(let i=2;i <=Math.sqrt(num);i++){
    if(num % i === 0) return false;
}
return true;
}

function findNthPrime(n) {
  if (n === 1) return 2; // The first prime number is 2

  let count = 1; // Start with the first prime number
  let num = 3; // Start checking odd numbers

  while (count < n) {
    if (IsPrime(num)) {
      count++;
      if (count === n) {
        return num; // Found the nth prime number
      }
    }
    num += 2; // Check the next odd number
  }
}

console.log(findNthPrime(2))

