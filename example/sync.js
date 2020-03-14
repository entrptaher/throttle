const throttle = require("@entrptaher/throttle");
const { performance } = require("perf_hooks");
const wait = require("waait");

// will print the data once in 1 second
const syncPerf = () => performance.now();
const throttledSyncPerf = throttle(syncPerf, 1000);

for (let i = 0; i < 10; i++) {
  wait(200)
    .then(throttledSyncPerf)
    .then(console.log);
}
