---
title: Multiply Steps Enhanced - Algorithm✓
date: 2018-09-09 15:30:28
tags: Algorithm✓, algorithm
image: algorithm.jpg
---

As promised in the last post, here's the enhanced version of the Multiply Steps algorithm.

<!-- more -->

First of all, let's have a look at the output of the interval `[0,20]`:

```javascript
[1,10,5,10,5,2,5,10,5,10,1,10,5,10,5,2,5,10,5,10,1]
```

Do you notice a pattern? Since there are only 10 possible last digits and they repeat over and over, we can simply build an object that links the last digit to the amount of steps necessary and perform a "translation".

```javascript
const multiplySteps = {
    0: 1,
    1: 10,
    2: 5,
    3: 10,
    4: 5,
    5: 2,
    6: 5,
    7: 10,
    8: 5,
    9: 10
};
```

Now, we only have to modify our existing function a bit:

```javascript
const multiplyStepsNumber = number => {
    const last = lastDigit(number);
    return multiplySteps[last];
};

// or shorter:
const multiplyStepsNumber = number => multiplySteps[lastDigit(number)];
```

<a href="https://jsfiddle.net/zh2a65c3/17/" target="_blank" class="btn btn-next">Open in JSFiddle</a>

And there you have it! Now usually, the return values of your functions are not going to be always the same, but in cases where they are, it's usually better to avoid doing the computing work for each and every request. If you have any ideas for what "problems" to solve next, feel free to [share them with me](https://twitter.com/krmax44) and I'll try to break them down and figure them out.