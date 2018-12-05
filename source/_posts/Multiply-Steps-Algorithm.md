---
title: Multiply Steps - Algorithm✓
date: 2018-08-28 21:27:28
tags: Algorithm✓, algorithm
image: algorithm.jpg
---

Did you ever wake up in the middle of the night having a non-existing problem in your mind, and thinking of a solution no one benefits from? Or are you an interviewer looking for questions that make you look smart? Whatever your case may be, here's the first episode of Algorithm✓.

<!-- more -->

### No really, why?

Actually, solving these riddle-style problems is really helpful in getting in touch with neat, useful tricks and pieces of code and can help you becoming a better developer. Feel free to try solving as much as possible yourself first and then come back to check your solutions or to grab some hints along the way.

### Preface: What is an algorithm?

Don't let this word scare you. "Algorithm" is just a fancy term for something that solves a problem. This is what [Wikipedia](https://en.wikipedia.org/wiki/Algorithm) has to say:

> In mathematics and computer science, an algorithm is [a] [...] specification of how to solve a class of problems. Algorithms can perform calculation, data processing and automated reasoning tasks.

### The request

Count how many times each number in a given interval needs to be multiplied with itself so that the product ends with the same digit as its last digit.

Many times, the biggest challenge is to actually understand what to do, not how to do it. To make it easier, let me break it down for you with an example for the number 5:

  - start: 5 × 1 = 5 → ends with 5
  - 5 × 2 = 10 → ends with 0
  - 5 × 3 = 15 → ends with 5 again

So, 5 needs 2 steps to end with its last digit again (we don't count the first one). This is only for one number though, we now have to apply this to an interval.

### The world-changing, sensational solution

Firstly, we will get an interval like `[3,7]`. But to work with this data, we need to translate this to an array with every number in it, so `[3,4,5,6,7]`. To do this, we'll create a simple helper function. It's good practise to keep functions as isolated as possible, preferably in sepeate files. This helps keeping them maintainable, reusable and the overall codebase clean and free of repetitions.

```js
const intervalToArray = (intervalStart, intervalEnd) => {
  const intervalArray = [];
  for (let i = intervalStart; i <= intervalEnd; i++) {
    intervalArray.push(i);
  }
  return intervalArray;
};
```

Then, we'll map over that array. Inside the map function, we'll grab the last digit and multiply it in a `while` loop until we have a result.

```js
const multiplyStepsInterval = (intervalStart, intervalEnd) => {
  const intervalArray = intervalToArray(intervalStart, intervalEnd);
  return intervalArray.map(number => multiplyStepsNumber(number));
};

const lastDigit = number => {
  const str = String(number);
  const arr = [...str];
  const last = arr.pop();
  return Number(last);
  // short: const lastDigit = number => Number([...String(number)].pop());
};

const multiplyStepsNumber = number => {
  const last = lastDigit(number);
  let i = 1;
  let calculated = null;
  while (last !== calculated) {
    i++;
    calculated = lastDigit(number * i);
  }
  return i - 1;
};
```

Let's test it with the interval `[0,9]`:

```js
multiplyStepsInterval(0, 9);
> [1, 10, 5, 10, 5, 2, 5, 10, 5, 10]
```

<a href="https://jsfiddle.net/zh2a65c3/12/" target="_blank" class="btn btn-next">Open in JSFiddle</a>

Looking good! Maybe you noticed a pattern in the result. If so, maybe you also already have an idea to make our algorithm much more efficient. If you don't, in the next episode I'll show you both!