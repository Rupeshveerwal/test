// JavaScript Practice: Closures & Scope
// Date: 2025-10-25

// 1. Global Scope Example
var globalVar = 'I am a global variable';

function showGlobal() {
  console.log(globalVar); // Accessible
}
showGlobal();

// 2. Function Scope Example
function scopeExample() {
  var message = 'I am function scoped';
  console.log(message);
}
scopeExample();
// console.log(message); // ❌ ReferenceError - not accessible outside function

// 3. Block Scope Example
{
  let blockScoped = 'I am block scoped';
  const constantValue = 10;
  console.log(blockScoped, constantValue);
}
// console.log(blockScoped); // ❌ Error

// 4. Lexical Scope Example
function outerFunction() {
  const outer = 'Outer Variable';

  function innerFunction() {
    console.log('Accessing:', outer); // innerFunction can access outer variable
  }

  innerFunction();
}
outerFunction();

// 5. Closure Example - Counter Function
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    console.log('Current count:', count);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// 6. Closure with Parameters
function greeting(name) {
  return function() {
    console.log(`Hello, ${name}!`);
  };
}

const greetJohn = greeting('John');
const greetAlice = greeting('Alice');

greetJohn(); // Hello, John!
greetAlice(); // Hello, Alice!

// 7. Private Variable using Closure
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      balance += amount;
      console.log(`Deposited: ${amount} | Balance: ${balance}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: ${amount} | Balance: ${balance}`);
      } else {
        console.log('Insufficient funds!');
      }
    },
    getBalance: function() {
      console.log(`Current Balance: ${balance}`);
    }
  };
}

const account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
account.getBalance();

// 8. Closure for Event Listeners (Browser Example)
// Uncomment the below lines to test in browser
// function setupButton() {
//   let clicks = 0;
//   document.getElementById('clickBtn').addEventListener('click', () => {
//     clicks++;
//     console.log(`Button clicked ${clicks} times`);
//   });
// }
// setupButton();

// 9. IIFE with Closure
(function() {
  let secret = 'Hidden message';
  console.log('IIFE executed. Secret is safe in closure.');
})();

// console.log(secret); // ❌ Error - secret not accessible outside IIFE

// 10. Advanced Example: Memoization using Closure
function memoizedAdd() {
  const cache = {};
  return function(num) {
    if (cache[num]) {
      console.log('Fetching from cache:', num);
      return cache[num];
    } else {
      console.log('Calculating result for:', num);
      const result = num + 10;
      cache[num] = result;
      return result;
    }
  };
}

const add = memoizedAdd();
console.log(add(5));  // Calculating
console.log(add(5));  // Fetching from cache