## Clever Anagram Algorithm

This algorithm popped up on my twitter feed, and I thought it'd be fun to try implementing it in Javascript. Here's how it works: 

  * Map each of the 26 English characters to a prime number
  * Then multiply the characters of each word
  * Since every integer is a unique product of primes, two words are anagrams if their products are the same.

  ex: 'A' = 2, 'E' = 5, 'R' = 7
  
  'ARE' = 2 * 7 * 5 = 70
  
  'EAR' = 5 * 2 * 7 = 70
