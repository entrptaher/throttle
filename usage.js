const throttle = require("./index");
const { performance } = require("perf_hooks");
const wait = require("waait");

const asyncPerf = async () => performance.now();
const throttledAsyncPerf = throttle(asyncPerf, 1000);

// will print the data twice in 2 second
(async () => {
  for (let i = 0; i < 10; i++) {
    await wait(200)
      .then(throttledAsyncPerf)
      .then(console.log);
  }
})();

// // will print the data once in 1 second
// const syncPerf = () => performance.now();
// const throttledSyncPerf = throttle(syncPerf, 1000);

// for (let i = 0; i < 10; i++) {
//   wait(200)
//     .then(throttledSyncPerf)
//     .then(console.log);
// }
