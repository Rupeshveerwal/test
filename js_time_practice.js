// JavaScript Timeouts and Intervals Practice

// 1. Basic setTimeout
setTimeout(() => {
  console.log('This message appears after 2 seconds');
}, 2000);

// 2. Basic setInterval
let count = 0;
const intervalId = setInterval(() => {
  console.log(`Interval count: ${count}`);
  count++;
  if (count > 5) {
    clearInterval(intervalId);
    console.log('Interval cleared');
  }
}, 1000);

// 3. Recursive Timeout (Flexible Interval)
function recursiveTimeout() {
  console.log('Recursive timeout triggered');
  setTimeout(recursiveTimeout, 1500);
}
setTimeout(recursiveTimeout, 1500);

// 4. Countdown Timer using setInterval
function startCountdown(duration) {
  let timeRemaining = duration;
  const timer = setInterval(() => {
    console.log(`Time left: ${timeRemaining}s`);
    timeRemaining--;
    if (timeRemaining < 0) {
      clearInterval(timer);
      console.log('Countdown finished');
    }
  }, 1000);
}
startCountdown(10);

// 5. Delayed Function Execution with Parameters
function greet(name) {
  console.log(`Hello, ${name}!`);
}
setTimeout(greet, 3000, 'JavaScript Learner');

// 6. Multiple Nested Timeouts
setTimeout(() => {
  console.log('Step 1');
  setTimeout(() => {
    console.log('Step 2');
    setTimeout(() => {
      console.log('Step 3');
    }, 1000);
  }, 1000);
}, 1000);

// 7. Custom Timer Class
class Timer {
  constructor(interval) {
    this.interval = interval;
    this.timerId = null;
  }

  start() {
    console.log('Timer started');
    this.timerId = setInterval(() => {
      console.log('Timer tick');
    }, this.interval);
  }

  stop() {
    clearInterval(this.timerId);
    console.log('Timer stopped');
  }
}

const myTimer = new Timer(2000);
myTimer.start();
setTimeout(() => myTimer.stop(), 10000);

// 8. Throttle Function using Timeout
function throttle(func, delay) {
  let timeout = null;
  return (...args) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, delay);
    }
  };
}

const logMessage = throttle((msg) => console.log(msg), 2000);
setInterval(() => logMessage('Throttled message'), 500);
