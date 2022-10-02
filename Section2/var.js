const odd = "홀수입니다.";
const even = "짝수입니다.";

module.exports = {
  odd, //원래는 odd: odd,
  even, // even: even, 이였음. -> 최신 문법 : 키와 값 변수가 동일한 경우 이렇게 생략가능.
};

// exports.odd = odd;
// exports.even = even;

// export default { odd, even };
