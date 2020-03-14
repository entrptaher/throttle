const throttle = (fn, timeout, memorize) => {
  let isResolving;
  let timer;
  let memorizedData;
  return (...args) => {
    if (!isResolving) {
      // execute instantly without delay
      const result = fn(...args);

      // save it for later
      if (memorize) memorizedData = result;

      // lock the instance
      isResolving = true;

      // setup a timer to release the lock later
      timer = setTimeout(() => {
        clearTimeout(timer);
        isResolving = null;
        timer = null;
      }, timeout);



      // return the normal result for now
      return result;
    }
    if (memorize) return memorizedData;

    // otherwise it will return undefined since we are not returning anything
  };
};

module.exports = throttle;
