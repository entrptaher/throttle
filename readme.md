Allow a function to execute only once during a set of time.

# Usage
Give it a function and timeout, it'll return a function, which executes instantly upon call, but will not execute again in the given time, regardless of how many times you call it. 

```js
const throttledFunction = throttle(yourFunction, timeout, memorized);
```

# Examples

## Async function
```js
const throttle = require("@entrptaher/throttle");

// your normal function here
const { performance } = require("perf_hooks");
const wait = require("waait");
const perf = async () => performance.now();

// make it controlled for 1 second
const sayPerf = throttle(perf, 1000);

// run it 20 times at a 100 ms interval
(async () => {
  for (let i = 0; i < 10; i++) {
    await wait(100)
      .then(sayPerf)
      .then(console.log);
  }
})();

// it should give you output only 2-3 times during that 2 seconds. It'll give output and rest of the result will be undefined.
```

Result:
```
269.6178760007024
undefined
undefined
undefined
undefined
1284.2643299996853
undefined
undefined
undefined
undefined
```

## Sync Function
It should work with normal functions as well,
```js
// will print the data once in 1 second
const syncPerf = () => performance.now();
const throttledSyncPerf = throttle(syncPerf, 1000);

for (let i = 0; i < 10; i++) {
  wait(200)
    .then(throttledSyncPerf)
    .then(console.log);
}
```

Result:
```
245.11091499775648
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
```

## Memorization
Pass true to memorization and it'll return same data for next few calls until timeout.

```js
const throttledAsyncPerf = throttle(asyncPerf, 1000, true);
// ... other code here
```

Result:
```
272.57964599877596
272.57964599877596
272.57964599877596
272.57964599877596
272.57964599877596
1298.406766999513
1298.406766999513
1298.406766999513
1298.406766999513
1298.406766999513
```