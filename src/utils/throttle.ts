let throttle: thorttleFun = function (fn, delay, ...args) {
  let timer: number | undefined = undefined;
  return function () {
    let self = this;
    if (timer == undefined) {
      timer = setTimeout(() => {
        fn.apply(self, args);
        clearTimeout(timer);
        timer = undefined;
      }, delay);
    }
  };
};

interface thorttleFun {
  (fn: Function, delay: number): (this: any) => void;
}

export default throttle;
