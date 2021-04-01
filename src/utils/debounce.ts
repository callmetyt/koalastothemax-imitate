let debounce: debounceFun = function (fn, delay, ...args) {
  let timer: undefined | number;

  return function () {
    let self = this;
    if (timer == undefined) {
      fn.apply(self, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, delay);
  };
};

interface debounceFun {
  (this: any, fn: Function, delay: number): (this: any) => void;
}

export default debounce;
