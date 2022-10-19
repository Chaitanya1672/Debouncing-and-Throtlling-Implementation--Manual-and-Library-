const btn = document.querySelector(".btn");
const clickCount = document.querySelector(".clickCount");
const triggerCount = document.querySelector(".triggerCount");
const thorttleTrgCount = document.querySelector(".thorttleTrgCount");

var pressCount = 0;
var triggerPressCount = 0;
var thorttlePressTrgCount = 0;

// manual debounce polyfill
const debounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

//manual throttle polyfill
const throttle = (cb, d) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

//Manual functionality
const debounceClick = debounce(() => {
  triggerCount.innerHTML = ++triggerPressCount;
}, 800);

//Manual functionality
const throttleClick = throttle(() => {
  thorttleTrgCount.innerHTML = ++thorttlePressTrgCount;
}, 1000);

// By using Library
// const debounceClick = _.debounce(() => {
//   triggerCount.innerHTML = ++triggerPressCount;
// }, 800);

// By using Library
// const throttleClick = _.throttle(() => {
//   thorttleTrgCount.innerHTML = ++thorttlePressTrgCount;
// }, 800);

btn.addEventListener("click", () => {
  clickCount.innerHTML = ++pressCount;
  debounceClick();
  throttleClick();
});
