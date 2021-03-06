/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {
    return array[array.length - 1] + sum(array.slice(0, -1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return Array.isArray(array[0]) ? arraySum(array[0]) : array[0];
  } else {
    const lastItem = array[array.length - 1];
    if (Array.isArray(lastItem)) {
      return arraySum(lastItem) + arraySum(array.slice(0, -1));
    } else {
      return lastItem + arraySum(array.slice(0, -1));
    }
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(Math.abs(n) - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  } else {
    if (n > 0) {
      return (n - 1) + sumBelow(n - 1);
    } else {
      return (n + 1) + sumBelow(n + 1);
    }
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x === y || x === (y - 1) || y === (x - 1)) {
    return [];
  } else {
    if (x < y) {
      return [].concat((x + 1), range((x + 1), y));
    } else {
      return [].concat((x - 1), range((x - 1), y));
    }
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp < 0) {
    return (1 / base) * Number(exponent(base, (exp + 1)).toFixed(6)); 
  } else {
    return base * exponent(base, (exp - 1));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 1) {
    return string[0];
  } else {
    return string.charAt(string.length - 1) + reverse(string.slice(0, -1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length <= 1) {
    return true;
  } else {
    return (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) && palindrome(string.slice(1, -1));
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (x === 0 && y === 0) {
    return NaN;
  } else if (x === y || x === 0) {
    return 0;
  } else if ((x > 0 && y > 0 && x < y) || (x > 0 && y < 0 && x < -y) || (x < 0 && y < 0 && x > y) || (x < 0 && y > 0 && x > -y)) {
    return x;
  } else if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
    return modulo((x - y), y);
  } else {
    return modulo((x + y), y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (y > 0) {
    return x + multiply(x, (y - 1));
  } else {
    return -x + multiply(x, (y + 1));
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (x === 0) {
    return 0;
  } else if (x > 0 && y > 0) {
    return (x < y) ? 0 : 1 + divide((x - y), y);
  } else if (x < 0 && y < 0) {
    return (x > y) ? 0 : 1 + divide((x - y), y);
  } else if (x < 0 && y > 0) {
    return (-x < y) ? 0 : -1 + divide((x + y), y);
  } else if (x > 0 && y < 0) {
    return (x < -y) ? 0 : -1 + divide((x + y), y); 
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  } else if (x === y) {
    return x;
  } else if (x < y) {
    if ((y - x) < 0) {
      return x - y;
    } else {
      return gcd(x, (y - x));
    }
  } else if (x > y) {
    if ((x - y) < 0) {
      return y - x;
    } else {
      return gcd((x - y), y);
    }
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1 === str2) {
    return true;
  } else {
    return (str1[0] === str2[0]) && compareStr(str1.slice(1), str2.slice(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 1) {
    return [str];
  } else {
    return [].concat(str[0], createArray(str.slice(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return array;
  } else {
    return [].concat(array[array.length - 1], reverseArr(array.slice(0, -1)));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 1) {
    return [value];
  } else {
    return [value].concat(buildList(value, (length - 1)));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 1) {
    return [String(n)];
  } else if (n % 3 === 0 && n % 5 === 0) {
    return [].concat(fizzBuzz(n - 1), 'FizzBuzz');
  } else if (n % 3 === 0) {
    return [].concat(fizzBuzz(n - 1), 'Fizz');
  } else if (n % 5 === 0) {
    return [].concat(fizzBuzz(n - 1), 'Buzz');
  } else {
    return [].concat(fizzBuzz(n - 1), String(n));
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  } else {
    if (array[0] === value) {
      return 1 + countOccurrence(array.slice(1), value);
    } else {
      return countOccurrence(array.slice(1), value);
    }
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    return [callback(array[0])];
  } else {
    return [].concat(callback(array[0]), rMap(array.slice(1), callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  if (Object.keys(obj).length === 0) {
    return 0;
  } else {
    let keyCount = 0;
    for (let prop in obj) {
      if (prop === key) {
        keyCount++;
      }
      if (typeof obj[prop] === 'object') {
        keyCount += countKeysInObj(obj[prop], key);
      }
    }
    return keyCount;
  }
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  if (Object.keys(obj).length === 0) {
    return 0;
  } else {
    let keyValCount = 0;
    for (let prop in obj) {
      if (obj[prop] === value) {
        keyValCount++;
      }
      if (typeof obj[prop] === 'object') {
        keyValCount += countValuesInObj(obj[prop], value);
      }
    }
    return keyValCount;
  }
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceKeysInObj(obj[prop], oldKey, newKey);
    }
    if (prop === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [0].concat(1);
  } else if (n >= 2 && n <= 4) {
    return fibonacci(n - 1).concat(n - 1);
  } else {
    const prevFibLastItem = fibonacci(n - 1)[fibonacci(n - 1).length - 1];
    const prevPrevFibLastItem = fibonacci(n - 2)[fibonacci(n - 2).length - 1];
    return fibonacci(n - 1).concat(prevFibLastItem + prevPrevFibLastItem);
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0 || n === 1) {
    return n;
  } else if (n >= 2 && n <= 4) {
    return (n - 1);
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  } else {
    return [].concat(array[0].toUpperCase(), capitalizeWords(array.slice(1)));
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  const firstItemCapitalized = array[0].charAt(0).toUpperCase().concat(array[0].slice(1));
  if (array.length === 1) {
    return [firstItemCapitalized];
  } else {
    return [].concat(firstItemCapitalized, capitalizeFirst(array.slice(1)));
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;
  for (let prop in obj) {
    if (typeof obj[prop] === 'number') {
      if (obj[prop] % 2 === 0) {
        sum += obj[prop];
      }
    }
    if (typeof obj[prop] === 'object') {
      sum += nestedEvenSum(obj[prop]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    const firstItem = Array.isArray(array[0]) ? flatten(array[0]) : array[0];
    return [].concat(firstItem, flatten(array.slice(1)));
  }
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  const tally = obj || {};
  if (str.length === 0) {
    return tally;
  } else {
    tally[str[0]] = (tally[str[0]] || 0) + 1;
    return letterTally(str.slice(1), tally);
  }
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length === 0) {
    return [];
  } else {
    const firstItem = (list[0] === list[1]) ? [] : list[0];
    return [].concat(firstItem, compress(list.slice(1)));
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  } else {
    return [].concat([array[0].concat(aug)], augmentElements(array.slice(1), aug));
  }
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    const firstItem = (array[0] === 0 && array[1] === 0) ? [] : array[0];
    return [].concat(firstItem, minimizeZeroes(array.slice(1)));
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    const firstItem = (array[0] >= 0) ? array[0] : -array[0];
    const secItem = (array[1] < 0) ? array[1] : -array[1];
    return [].concat(firstItem, (secItem || []), alternateSign(array.slice(2)));
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  let firstItem = Number(str[0]);
  const numbersArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if (str[0] !== ' ' && Number.isInteger(firstItem)) {
    firstItem = numbersArr[firstItem];
  } else {
    firstItem = str[0];
  }

  if (str.length === 0) {
    return '';
  } else {
    return ''.concat(firstItem, numToText(str.slice(1)));
  }
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
// Wasn't able to solve, needed help with solution from github user TwoFistedJustice
var tagCount = function(tag, node = window.document) {
  tag = tag.toUpperCase();
  if (node.children.length === 0) {
    return 0;
  } else {
    let count = 0;
    for (let child of node.children) {
      if (child.tagName === tag) {      // can also use "child.nodeName" here
        count++
      }
      count += tagCount(tag, child);
    }
    return count;
  }
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min = 0, max = array.length - 1) {
  let mid = Math.floor((min + max) / 2);
  if (array[mid] === target) {
    return mid;
  } else if (min >= max) {
    return (array[mid] === target) ? mid : null;
  } else {
    if (array[mid] > target) {
      return binarySearch(array, target, min, (mid - 1));
    } else {
      return binarySearch(array, target, (mid + 1), max);
    }
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const result = [];
    const mid = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, mid));
    const rightHalf = mergeSort(array.slice(mid));

    while (leftHalf.length && rightHalf.length) {
      if (leftHalf[0] < rightHalf[0]) {
        result.push(leftHalf.shift());
      } else {
        result.push(rightHalf.shift());
      }
    }

    return result.concat(leftHalf, rightHalf);
  }
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (typeof input !== 'object') {
    return input;
  } else if (Array.isArray(input)) {
    if (input.length === 0) {
      return [];
    } else {
      let firstItem = input[0];
      if (Array.isArray(firstItem)) {
        firstItem = clone(firstItem)
      } else if (typeof firstItem === 'object') {
        const holderObj = {};
        for (let key in firstItem) {
          holderObj[key] = clone(firstItem[key]);
        }
        firstItem = holderObj;
      }
      
      return [].concat([firstItem], clone(input.slice(1)));
    }
  } else {      // (if input is an object)
    if (Object.keys(input).length === 0) {
      return {};
    } else {
      const clonedObj = {};
      for (let key in input) {
        clonedObj[key] = clone(input[key]);
      }

      return clonedObj;
    }
  }
};
