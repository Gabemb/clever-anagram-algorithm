/*
  Clever Algorithm to find out whether or not two words are anagrams

  * Map each of the 26 English characters to a prime number
  * Then multiply the characters of each word
  * Since every integer is a unique product of primes,
    two words are anagrams if their products are the same.

  ex: 'A' = 2, 'E' = 5, 'R' = 7
      'ARE' = 2 * 7 * 5 = 70
      'EAR' = 5 * 2 * 7 = 70
 */

/**
 * An implementation of the Sieve of Eratosthenes (https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
 * @return  {array}  primes  An array of all the prime numbers from 2 - 101. 26 in total.
 */
const createPrimesArray = () => {
  let sieve = []; /* Keeps track of all the multiples of each prime number 
                    (which inherently makes them not prime) */
  let primes = [];
  for (let i = 2; i <= 101; i++) {
    if (!sieve[i]) {
      // if i is not marked inside of our sieve, then it is a prime
      primes.push(i);
      for (let j = i * i; j < 101; j+=i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
};

/**
 * Creates a table that assigns every letter in the english alphabet a prime number value
 * @return  {object}  valueTable Table of letter keys from a-z each with a prime number value from 2-101
 */
const assignPrimes = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const primes = createPrimesArray();
  let valueTable = {};
  alphabet.forEach((letter, idx) => {
    valueTable[letter] = primes[idx];
  });
  return valueTable;
};

/**
 * Function that checks whether two words are anagrams based on their "total prime product"
 * @param   {string}  word1
 * @param   {string}  word2
 * @return  {boolean} result
 */
const areAnagrams = (word1, word2) => {
  if (word1.length !== word2.length) return false;
  let result = false;
  const primeValues = assignPrimes();
  const firstWordVal = word1.split('').reduce((total, letter) => total * primeValues[letter], 1);
  const secondWordVal = word2.split('').reduce((total, letter) => total * primeValues[letter], 1);
  
  if (firstWordVal === secondWordVal){
    result = true;
  }

  return result;
};

// Some simple tests cases
console.log(areAnagrams('wepa', 'pawe')); // true
console.log(areAnagrams('totoro', 'rttooo')); // true 
console.log(areAnagrams('ayjenfk', 'vbqewaf')); // false
console.log(areAnagrams('', 'sup')); // false
