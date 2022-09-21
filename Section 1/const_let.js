// var보다는 const, let이 대체 중
if (true){
    var x = 3;
}
console.log(x); //3

if(true){
    const y = 3;
}
// console.log(y);  //uncaught ReferenceError: y is not defined


const a = 3;
// a = "5"; // error

const b = {name : "5jiji"};
b.name = "4ji"; // 이건 ㄱㅊ


// 값을 바꾸고 싶다면 let으로! - 하지만 const 쓸 일이 더 많음.