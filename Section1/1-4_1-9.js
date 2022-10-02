// 템플릿 문자열, 객체 리터럴
var won = 1000;
const result = `이 과자는 ${won}원 입니다.`; //~ 와 같은 키 ` 


// ============================객체 리터럴===========================
var sayNode = function(){
    console.log('Node');
};
var es = 'ES';
const newObject = {
    sayJS(){                    // 객체의 메서드엔 :function을 붙이지 않아도 됨.
        console.log('JS');
    },
    sayNode,                    // {sayNode : sayNode}는 {sayNode}로 축약 가능
    [es + 6]: 'Fantastic',      // [변수 + 값] : 이렇게 동적 속성명을 객체 속석 명으로 사용 가능 
};

newObject.sayNode();    // Node
newObject.sayJS();      // JS
console.log(newObject.ES6);     // Fantastic


// ========================화살표 함수===============================
function add1(x,y){
    return x+y;
}

const add2 = (x,y) => {
    return x+y;
};

// 위와 같이 중괄호 뒤에 바로 return이 나오면 이처럼 생략 가능
const add3 = (x,y) => x + y;

const add4 = (x,y) => (x + y);


function not1(x) {
    return !x;
}

const not2 = x => !x;

// 객체를 바로 리턴하는 경우
const obj = (x,y) => ({x, y});


// this - 그냥 function인 경우
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero'],
    logFriends: function() {
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    },
};

relationship1.logFriends();

// this - 화살표 함수
const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero'],
    logFriends() {
        this.friends.forEach(friend =>{
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();


//===========비구조화 할당================
const example = {a: 123, b:{c:135, d: 146}};
// const a = example.a;     // 옛날방식
// const d = example.b.d;

const{a, b: { d }} = example; //구조분해문법 객체는 키를 똑같이 맞춰줘야함.
console.log(a); //123
console.log(d); //146



arr = [1, 2, 3, 4, 5]          // 이렇게 배열도 가능
// const x = arr[0]         // 옛날 방식
// const y = arr[1]
// const z = arr[2]

const [x, y, , , z] = arr;


//================클래스===================

// 예전 방식 - 이렇게 따로따로 있었음.
// var Human = function(type){
//     this.type = type || 'human';
// };

// Human.isHuman = function(human){
//     return human instanceof Human;
// }

// Human.prototype.breath = function(){
//     alert('h-a-a-a=m');
// };



// 최근 방식 - 보기가 훨씬 깔끔함
class Human{
    constructor(type = 'human'){
        this.type = type;
    }

    static isHuman(human){
        return human instanceof Human;
    }

    breathe(){
        alert('h-a-a-a-m');
    }
}




// 예전 상속방식
// var Zero = function(type, firstName, lastName){
//     Human.apply(this, arguments);
//     this.firstName = firstName;
//     this.lastName = lastName;
// };
// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero;  //상속
// Zero.prototype.sayName = function(){
//     alert(this.firstName + " " + this.lastName);
// };
// var oldZero = new Zero('human', 'Zero', 'Cho');
// Human.isHuman(oldZero);


// 최근 상속방식
class Zero extends Human{   // 이렇게하면 자동으로 상속됨.
    constructor(type, firstName, lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();        // super로 부모의 메서드를 부를 수 있음.
        alert(`${this.firstName} ${this.lastName}`); // ` : 문법 조심
    }
}




//===========Promise, async/await==============

const promise = setTimeoutPromise(3000);

console.log('딴짓');
console.log('딴짓');
console.log('딴짓');
console.log('딴짓');
console.log('딴짓');
console.log('딴짓');

promise.then(()=>{
    console.log('지금 할래');   // 실행을 해놓고, 나중에 필요할 때 꺼내쓸 수 있음.
})





//===========프런트엔드 자바스크립트=============

// GET 요청 보내기
axios.get('https: ~~')
    .then((result) =>{
        console.log(result);
        console.log(result.data); // {}
    })
    .catch((error) => {
        console.error(error);
    });

(async () => {
    try{
        const result = await axios.get('https:// ~~');
        console.log(result);
        console.log(result.data); // {}

    }catch (error){
        console.error(error);
    }
})();



// POST 요청 보내기

(async () => {
    try{
        const result = await axios.post('https:// ~~',{
            name: '5jiji',
            birth: 2002,
        });
        console.log(result);
        console.log(result.data); // {}

    }catch (error){
        console.error(error);
    }
})();

