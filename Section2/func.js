// const value = require("./var.js");
// // require 노드 제공 함수

// console.log(value); // value = module.exports 했던 객체가 됨.

// --- 구조 분해 할당 버전 ---
const { odd, even } = require("./var");
// import { odd, even } from "./var";

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

// 이렇게 넘겨받았던 애들을 객체로 다시 넘겨줄 수도 있음.
// module.exports = {
//   checkOddOrEven,
//   odd,
//   even,
// };

module.exports = checkOddOrEven;
